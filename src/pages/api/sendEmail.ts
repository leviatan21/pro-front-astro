import type { APIRoute } from 'astro'
import { loadEnv } from 'vite'
import nodemailer from 'nodemailer'
import emailjs from '@emailjs/nodejs'

// https://docs.astro.build/en/recipes/build-forms-api/
// https://docs.astro.build/en/recipes/build-forms/
export const POST: APIRoute = async ({ request }) => {

  const body = await request.json()

  const response = await Send(body)
    .then((res) => true)
    .catch((err) => false)

  if (!response) {
    return new Response(
      JSON.stringify({
        'message': 'Error!'
      }),
      {
        'status': 500,
        'statusText': 'Internal Server Error',
        'headers': {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  return new Response(
    JSON.stringify({
      'message': 'Success!'
    }),
    {
      'status': 200,
      'statusText': 'OK',
      'headers': {
        'Content-Type': 'application/json'
      }
    }
  )

}

const Env = () => {
  return loadEnv(process.env.NODE_ENV, process.cwd(), '')
}

const Validate = (body) => {

  const env = Env()

  const subject     = env?.PRIVATE_MAIL_SUBJECT       || null
  const fromAccount = env?.PRIVATE_MAIL_FROM_ACCOUNT  || null
  const fromName    = env?.PRIVATE_MAIL_FROM_NAME     || null
  const toAccount   = env?.PRIVATE_MAIL_TO_ACCOUNT    || null
  const toName      = env?.PRIVATE_MAIL_TO_NAME       || null

  const vars = {
    'subject' : body?.subject || subject || null,
    'from'    : body?.from    || (fromName && fromAccount) ? `${fromName} <${fromAccount}>` : fromAccount ? fromAccount : null,
    'to'      : body?.to      || (toName   && toAccount  ) ? `${toName} <${toAccount}>`     : toAccount   ? toAccount   : null
  }

  const data = {
    'name'    : body?.name,
    'email'   : body?.email,
    'phone'   : body?.phone,
    'comments': body?.comments
  }

  /* Settings */
  if (!vars?.from || !vars?.to || !vars?.subject) {
    throw new Error('sendEmail.Validate - MAIL Settings required')
  }

  /* Fields */
  if (!data?.name || !data?.email || !data?.phone || !data?.comments) {
    throw new Error('sendEmail.Validate - DATA Fields required')
  }

  return {
    ...vars,
    'data': data
  }
}

const Template = (data) => {
  return {
    'text': `Tienes un nuevo mensaje:
Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone}
Comentarios: ${data.comments}`,
    'html': `Tienes un nuevo mensaje:<br/> <br/> 
<b>Nombre:</b><br/> 
${data.name}<br/><br/> 
<b>Email:</b><br/> 
${data.email}<br/><br/> 
<b>Teléfono:</b><br/> 
${data.phone}<br/><br/> 
<b>Comentarios:</b><br/>
${data.comments}<br/><br/>`
  }
}

const Parse = (params) => {

  const {
    subject,
    from,
    to,
    data
  } = params

  if (!data) {
    throw new Error('sendEmail.Parse - Body required')
  }

  const content = Template(data)

  return {
    'subject':  content?.subject  || subject,
    'from':     content?.from     || from,
    'to':       content?.to       || to,
    'text':     content.text,
    'html':     content.html
  }
}

const SendNodeMailer = async (params) => {

  const env = Env()

  const host        = env?.PRIVATE_MAIL_HOST        || null
  const port        = env?.PRIVATE_MAIL_PORT        || null
  const secure      = env?.PRIVATE_MAIL_SECURE      || null
  const user        = env?.PRIVATE_MAIL_USER        || null
  const pass        = env?.PRIVATE_MAIL_PASS        || null

  /* mailer */
  if (!host || !port || !secure || !user || !pass) {
    throw new Error('sendEmail.SendNodeMailer - MAIL Settings required')
  }

  /* Template & Parse */
  const email     = Parse(params)

  return await nodemailer
    .createTransport({
      'host':   (host).toString(),
      'port':  +(port),
      'secure': (secure === 'true') ? true : false,
      'auth': {
        'user': (user).toString(),
        'pass': (pass).toString()
      },
      'tls': {
        // do not fail on invalid certs
        'rejectUnauthorized': false
      }
    })
    .sendMail(email)
    .then((resp) => {
      return resp
    })
    .catch((error) => {
      console.error('sendEmail.Mailer.catch()', {'error':error?.message})
      throw new Error('sendEmail.Mailer - Error')
    })
}

const SendEmailJs = async (params) => {

  const env = Env()

  const serviceId   = env?.PRIVATE_MAIL_SERVICE_ID  || null
  const templateId  = env?.PRIVATE_MAIL_TEMPLATE_ID || null
  const publicKey   = env?.PRIVATE_MAIL_PUBLIC_KEY  || null
  const privateKey  = env?.PRIVATE_MAIL_PRIVATE_KEY || null

  /* mailer */
  if (!serviceId || !templateId || !publicKey || !privateKey) {
    throw new Error('sendEmail.SendEmailJs - MAIL Settings required')
  }

  const templateParams = {
    'subject':        params.subject,
    'from_email':     params.from,
    'reply_to':       params.to,
    'input_name':     params.data.name,
    'input_email':    params.data.email,
    'input_phone':    params.data.phone,
    'input_comments': params.data.comments
  }

  return emailjs.send(
    serviceId, 
    templateId, 
    templateParams,
    {
      'publicKey': publicKey,
      'privateKey': privateKey
    }
  )
  .then(
    (resp) => {
      return resp
    },
    (err) => {
      console.error('sendEmail.SendEmailJs.FAILED()', err)
      throw new Error('sendEmail.SendEmailJs - Fail')
    }
  )
  .catch((error) => {
    console.error('sendEmail.SendEmailJs.catch()', {'error':error})
    throw new Error('sendEmail.SendEmailJs - Error')
  })
}

const Send = async (body) => {
  try {
    /*  Validate parameters */
    const params = Validate(body)
    /* Send mail */
  //return await SendNodeMailer(params)
    return await SendEmailJs(params)
  } catch (error) {
    console.error('sendEmail.Send.catch()', {'error':error?.message})
    return Promise.reject()
  }
}