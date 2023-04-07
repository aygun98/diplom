import React, { useState } from 'react';
import './css/AboutAcardion.css'
import {VscTools} from 'react-icons/vsc'
import {BsBricks} from 'react-icons/bs'
import {IoIosPeople} from 'react-icons/io'

const AboutAcardion = () => {
   
    const [ElaqeActive1, setElaqeActive1] = useState(false);

    const [ElaqeActive2, setElaqeActive2] = useState(false);
    const [ElaqeActive3, setElaqeActive3] = useState(false);



 
    return (
        <>
        <div className='about-acardion-header-menu-container'>
        <div className='about-acardion-header-text' >
           <h6>Üstünlüklərimiz</h6>
           <h1>Gəlin Sizə Hər şeyi Düzəltməyə Kömək edək</h1>
            <p>Ağrıma heyfslənirəm, amma elitamı itirdiyimə görə çox üzülürəm.</p>
        </div>

        <div className='about-acardion-container'>

            <div className='about-acardion-div'>
                <div class="about-accordion" onClick={() =>setElaqeActive1(!ElaqeActive1)  }  >
                    <VscTools className='about-acardion-icon' />
                    <h1>Unudulmaz Təcrübə</h1>
                    </div>
                    {ElaqeActive1 && <div class="panel"> 
                  <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi.Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi. </p>
                </div>}
            </div>
            <div className='about-acardion-div'>
                <div class="about-accordion"  onClick={() => setElaqeActive2(!ElaqeActive2)}>
                    <BsBricks className='about-acardion-icon'/>
                  <h1>Keyfiyyətə Nəzarət Sistemi</h1>
                    </div>
                    {ElaqeActive2 &&    <div class="panel">
                    <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi.Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi.</p>
                </div>}
            </div>
            <div className='about-acardion-div'>
                <div class="about-accordion"  onClick={() => setElaqeActive3(!ElaqeActive3)} >
                    <IoIosPeople className='about-acardion-icon'/>
                    <h1>Peşəkar və İxtisaslı</h1>
                    </div>
                    {ElaqeActive3 &&  <div class="panel">
                    <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi.Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi.</p>
                </div>}
            </div>
        </div>
        </div>
        </>
    )
}

export default AboutAcardion