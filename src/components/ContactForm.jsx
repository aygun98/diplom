import React from 'react'
import './css/ContactForm.css'
import Form from './Form'

const ContactForm = () => {
    return (
        <>
            <div className='contact-form-container'>
                <div className="contact-form-left"></div>
                <div className="contact-form-right">
                    <div className='contact-form-right-text'>
                        <h6>Bizimlə əlaqə saxlayın</h6>
                        <h1>Gəlin Əlaqə Saxlayaq</h1>
                        <p>Hər hansı bir sualınız və ya probleminiz varsa, sadəcə olaraq aşağıdakı əlaqə məlumatlarından istifadə edin.</p>
                    </div>
                    <Form/>
                </div>
            </div>
        </>
    )
}

export default ContactForm