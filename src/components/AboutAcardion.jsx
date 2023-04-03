import React from 'react'
import './css/AboutAcardion.css'
import {VscTools} from 'react-icons/vsc'
import {BsBricks} from 'react-icons/bs'
import {FaRegCommentAlt} from 'react-icons/fa'

const AboutAcardion = () => {
    let acc = document.getElementsByClassName("accordion");
    let i;


    const ac = () => {
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    }
    return (
        <>
        <div className='about-acardion-header-menu-container'>
        <div className='about-acardion-header-text'>
           <h6>Üstünlüklərimiz</h6>
           <h1>Gəlin Sizə Hər şeyi Düzəltməyə Kömək edək</h1>
            <p>Ağrıma heyfslənirəm, amma elitamı itirdiyimə görə çox üzülürəm.</p>
        </div>

        <div className='about-acardion-container'>

            <div className='acardion-div'>
                <div class="accordion" onClick={ac}>
                    <VscTools className='acardion-icon'/>
                    <h1>Unudulmaz Təcrübə</h1>
                    </div>
                <div class="panel">
                    <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi.Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi.
                    </p>
                </div>
            </div>
            <div className='acardion-div'>
                <div class="accordion" onClick={ac}>
                    <BsBricks className='acardion-icon'/>
                  <h1>Keyfiyyətə Nəzarət Sistemi</h1>
                    </div>
                <div class="panel">
                    <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi.Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi.</p>
                </div>
            </div>
            <div className='acardion-div'>
                <div class="accordion" onClick={ac}>
                    <FaRegCommentAlt className='acardion-icon'/>
                    <h1>Peşəkar və İxtisaslı</h1>
                    </div>
                <div class="panel">
                    <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi.Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi.</p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default AboutAcardion