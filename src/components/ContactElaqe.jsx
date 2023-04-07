
import React, { useState } from 'react';
import './css/ContactElaqe.css'
import {HiOutlineMapPin} from 'react-icons/hi2'
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineMailOpen} from 'react-icons/hi'

const ContactElaqe = () => {

    const [ElaqeActive1, setElaqeActive1] = useState(false);
    const [ElaqeActive2, setElaqeActive2] = useState(false);
    const [ElaqeActive3, setElaqeActive3] = useState(false);
    return (
        <>
            <div className='contact-elaqe'>
                <div className="contact-accordion-item">
                    <div className="contact-accordion-title" onClick={() => setElaqeActive1(!ElaqeActive1)}>
                        <h1><HiOutlineMapPin/></h1>

                    </div>
                    {ElaqeActive1 && <div className="contact-accordion-content">
                        <h6>Ofis yeri</h6>
                        <p>99 Broklyn New Street, ABŞ</p>
                        </div>}
                </div>
                <div className="contact-accordion-item">
                    <div className="contact-accordion-title" onClick={() => setElaqeActive2(!ElaqeActive2)}>
                        <h1><FiPhoneCall/></h1>

                    </div>
                    {ElaqeActive2 && <div className="contact-accordion-content">
                        <h6>Telefon nömrəsi</h6>
                        <p>+123 456 789</p>
                      </div>}
                </div>
                <div className="contact-accordion-item">
                    <div className="contact-accordion-title" onClick={() => setElaqeActive3(!ElaqeActive3)}>
                        <h1><HiOutlineMailOpen/></h1>


                    </div>
                    {ElaqeActive3 && <div className="contact-accordion-content">
                        <h6>E-poçt ünvanı</h6>
                        <p>info@fixano.com</p>
                        </div>}
                </div>
            </div>
        </>
    )
}

export default ContactElaqe