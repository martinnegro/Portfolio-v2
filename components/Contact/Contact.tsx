import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import LinksList from './LinksList/LinksList'

const Contact = () => {
  return (
    <section id='contact'>
      <LinksList />
      <ContactForm />
    </section>
  )
}

export default Contact