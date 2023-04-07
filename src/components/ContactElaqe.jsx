
import React, { useState } from 'react';
import './css/ContactElaqe.css'

const ContactElaqe = () => {

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    return (
        <>
            <div className="contact-accordion-item">
                <div className="contact-accordion-title" onClick={() => setIsActive1(!isActive1)}>
                    <h1>
                        Hansı xidmət növlərini təqdim edirsiniz?</h1>

                </div>
                {isActive1 && <p className="contact-accordion-content">Çox uzaqlarda, söz dağlarının arxasında, Vokalia və Consonantia ölkələrindən uzaqlarda, kor mətnlər yaşayır. Ayrılaraq sahildəki Bookmarksgrove-da yaşayırlar</p>}
            </div>
            <div className="contact--item">
                <div className="contact-accordion-title" onClick={() => setIsActive2(!isActive2)}>
                    <h1>Qaydalarınız və şərtləriniz nədir?</h1>
                   
                </div>
                {isActive2 && <p className="contact-accordion-content">Çox uzaqlarda, söz dağlarının arxasında, Vokalia və Consonantia ölkələrindən uzaqlarda, kor mətnlər yaşayır. Ayrılaraq sahildəki Bookmarksgrove-da yaşayırlar</p>}
            </div>
            <div className="contact-accordion-item">
                <div className="contact-accordion-title" onClick={() => setIsActive3(!isActive3)}>
                    <h1>Layihəni başa çatdırmaq nə qədər vaxt aparacaq?</h1>
                    

                </div>
                {isActive3 && <p className="contact-accordion-content">Çox uzaqlarda, söz dağlarının arxasında, Vokalia və Consonantia ölkələrindən uzaqlarda, kor mətnlər yaşayır. Ayrılaraq sahildəki Bookmarksgrove-da yaşayırlar</p>}
            </div>
        </>
    )
}

export default ContactElaqe