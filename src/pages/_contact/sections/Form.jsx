import { useState } from 'react'
import { Trans } from 'react-i18next'
import emailjs from '@emailjs/browser'

import fields from './data/fields.js'

import { getEnv } from '../../components/Links.js'
import SectionForm from './sections/Form.jsx'
import Section from '../../components/Section/index.jsx'
import Message from '../../components/Message/index.jsx'
import SectionHero from './sections/Hero.jsx'

function Contact(props) {

  const [loading, setLoading] = useState(false)
  const [result, setResult]   = useState(null)

  const {
    publicKey   = null,
    serviceId   = null,
    templateId  = null,
    from_name,
    from_email,
    reply_to,
  } = props

  /* https://www.npmjs.com/package/@emailjs/browser */
  const sendEmail = async (templateParams) => {
    return emailjs.send(
      serviceId, 
      templateId, 
      templateParams,
      publicKey
    )
    .then(() => {
      return true
    }, () => {
      return false
    })
  }

  const handleFormSubmit = async (inputs) => {
    setLoading(true)

    const templateParams = {
      'subject': 'Contacto desde Pro web',
      'from_email': `${from_name} <${from_email}>`,
      'reply_to': `${from_name} <${reply_to}>`,
    }

    Object.keys(inputs).map((q) => {
      templateParams[ `input_${inputs[q].name}` ] = inputs[q].value
    })

    let response = false
    try {
      response = await sendEmail(templateParams)
    } catch (error) {}

    setResult(response)
    setLoading(false)
  }

  return (
    <Section className="top hero d-flex align-items-center full">
      <div className="container">
        <div className="row">
          {result===null ? (
            <>
              <SectionHero />
              <SectionForm fields={fields} loading={loading} action={handleFormSubmit} />
            </>
          ) : (
            <Message
              className="col-6 mx-auto"
              title={<Trans i18nKey='pagesContact:messageTitle' />}
              message={result===true ? (
                <Trans i18nKey='pagesContact:messageSuccess' />
              ) : (
                <Trans i18nKey='pagesContact:messageError' />
              )}
            />
          )}
        </div>
      </div>
    </Section>
  )
}
export default Contact