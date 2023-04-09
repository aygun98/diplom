import React , {useRef}from 'react'
import './css/Footer.css'
import Button from './Button'
import { FiPhoneCall } from 'react-icons/fi'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
//mail
import emailjs from '@emailjs/browser';

const Footer = () => {

  //mail
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
  return (
    <>
     <div className="footer-top"  data-aos="fade-up"  data-aos-delay="300" data-aos-duration="600">
        <div className="footer-top-left" data-aos="fade-right"  data-aos-delay="500">
          <h6 >Təcili Yardım lazımdır</h6>
          <h1 >24 Saat Təcili Xidmətlərə hər zaman zəng edin!</h1>
          <div className="footer-top-left-elaqe">
         <a href='tel:'> <Button klass="footer-top-left-btn" daxiliYazi="Xidmət tələb edin"/></a>
         <span className='footer-top-left-elaqe-span'> <FiPhoneCall className='footer-phone-icon' /> +123 456 789</span>
          </div>
        </div>
        <div className="footer-top-right">
        <div div className="footer-top-right-img" data-aos="fade-left"   data-aos-delay="500"></div>
        </div>
      </div>
    <div className='footer-container'>
      <div className="footer-center">
        <div className="footer-center-left">
          <div className="footer-center-left-logo"></div>
          <p>Xəstənin qayğısına qalmaq vacibdir, xəstəni xəstə izləyəcək, ancaq doğuş və ağrı ilə eyni vaxtda baş verəcəkdir.</p>
          <div className="footer-center-left-icons">
         <a href=''> <BsFacebook className='footer-center-left-icon' /></a>
         <a href=''><AiOutlineTwitter className='footer-center-left-icon' /></a> 
         <a href=''><AiFillYoutube className='footer-center-left-icon' /></a> 
         <a href=''><AiOutlineInstagram className='footer-center-left-icon' /></a> 
          </div>
        </div>
        <div className="footer-center-center">
          <ul>
            <h3>Bizi Kəşf Edin</h3>
            <Link to=""><IoIosArrowForward className='footer-center-center-icon'/>Ana səhifə</Link>
            <Link to=""><IoIosArrowForward className='footer-center-center-icon'/>Haqqımızda</Link>
            <Link to=""><IoIosArrowForward className='footer-center-center-icon'/>Tək yazı</Link>
            <Link to=""><IoIosArrowForward className='footer-center-center-icon'/>Bloq</Link>
          </ul>
          <ul>
            <h3>Xidmətlər</h3>
          <Link to=""><IoIosArrowForward className='footer-center-center-icon'/>Xidmətlər</Link>
          <Link to=""><IoIosArrowForward className='footer-center-center-icon'/>Xidmət təfərrüatı</Link>
          <Link to=""><IoIosArrowForward className='footer-center-center-icon'/>Qiymət planı</Link>
          <Link to=""><IoIosArrowForward className='footer-center-center-icon'/>Əlaqə</Link>
          </ul>
        </div>
        <div className="footer-center-right">
          <h4>Xəbər bülleteni</h4>
          <p>E-poçt vasitəsilə ən son yeniləmələri əldə edin. Bunu qaçırmayın. İstənilən vaxt abunəlikdən çıxa bilərsiniz.</p>
          <form action="" className='footer-center-right-form' ref={form} onSubmit={sendEmail}>
            <input type="mail" name="email"  placeholder='E-poçtunuz...' />
            <button className='footer-bottom-form-btn'><span>İndi Abunə Olun </span></button>
          </form>
        </div>
      
      </div>
      <div className="footer-bottom">
        <span></span>
        <h6>© Copyright 2022 Fixano Theme tərəfindən</h6>
      </div>
    </div>
    </>
  )
}

export default Footer