


export const prerender = false


// https://docs.astro.build/en/recipes/captcha/
export const POST = async ({ request }) => {


  const body = await request.json();

  const response = await Send(body).then((res) => res).catch((err) => false)

  if (!response) {
    return new Response(
      JSON.stringify({
        'message': 'Error'
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
      'message': 'Ok',
      ...response
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

const Validate = (body) => {

  const recaptchaSecretKey = import.meta.env?.PRIVATE_RECAPTCHA_SECRETKEY || null
  const recaptchaToken     = body?.token || null

  /* Settings */
  if (!recaptchaSecretKey) {
    throw new Error('sendEmail.Validate - Recaptcha Settings required !')
  }

  /* Fields */
  if (!recaptchaToken) {
    throw new Error('sendEmail.Validate - Recaptcha Token required !')
  }

  return {
    'secretKey': recaptchaSecretKey,
    'token': recaptchaToken
  }
}

const Verify = async (params) => {

  const recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify'

  const requestBody = new URLSearchParams({
    'secret': params.secretKey,   // This can be an environment variable
    'response': params.token      // The token passed in from the client
  })

  const response = await fetch(recaptchaURL, {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    'body': requestBody.toString()
  })
  .then( async (response) => {
    return await response.json()    
  })
  .catch((error) => {
    console.error('recaptcha.SiteVerify.catch()', error?.message || error)
    throw new Error('recaptcha.SiteVerify - Error')
  })

  // {"success":true,"challenge_ts":"2024-06-20T13:39:50Z","hostname":"testkey.google.com"}
  return {'success':response?.success || false}
}

const Send = async (body) => {
  try {
    /*  Validate parameters */
    const params = Validate(body)
    /* Send mail */
    return await Verify(params)
  } catch (error) {
    console.error('recaptcha.Send.catch()', error?.message || error)
    return Promise.reject({
      'error': true, 
      'message': error?.message || error,
      'status': 500
    })
  }
}