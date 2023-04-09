import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import FormModalQutu from './FormModalQutu';
import Button from './Button';

import './css/Form.css'

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tdljwia', 'template_o1rj2rt', form.current, 'b8zLQ2-MXxCE83kPS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
            form.current.reset()
    };


    // modal
    const [openModalForm, setOpenModalForm ] = useState(false)
    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <span>
                        <label >Adınız</label><br />
                        <input type="fname" name="first_name" autoFocus />
                    </span>
                    <span>
                        <label >Soyadınız</label> <br />
                        <input type="lname" name="last_name" />
                    </span>
                </div>
                <div>
                    <span>
                        <label>E-poçtunuz</label> <br />
                        <input type="email" name="email" />
                    </span>
                    <span>
                        <label >Telefon </label> <br />
                        <input type="tel" name="phone" placeholder='+994'  />
                    </span>
                </div>
                <label>Mesajınız</label>
                <textarea name="message" />


                <Button klass='form-button-elaqe' type="submit" daxiliYazi="Mesajı Göndər" onClick={()=>{ setOpenModalForm(true)}} />
            </form>
            {/* <FormModalQutu/> */}
            {openModalForm && < FormModalQutu closeModalForm={setOpenModalForm}/>}
        </>
    )
}

export default Form