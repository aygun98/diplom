import React from 'react'
import './css/Contact.css'
import CompleHeaders from './CompleHeaders'
import ContactForm from './ContactForm'
import ContactElaqe from './ContactElaqe'
import ContactMap from './ContactMap'
const Contact = () => {
  return (
    <>
    <CompleHeaders h6='Əlaqə' h1='Bizimlə əlaqə saxlayın'/>
      <ContactForm/>
      <ContactElaqe/>
      <ContactMap/>
    </>
  )
}

export default Contact