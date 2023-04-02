import React from 'react'
import './css/Footer.css'
import Button from './Button'
import { FiPhoneCall } from 'react-icons/fi'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <div className="footer-top">
        <div className="footer-top-left">
          <h6 >Təcili Yardım lazımdır</h6>
          <h1 >24 Saat Təcili Xidmətlərə hər zaman zəng edin!</h1>
          <div className="footer-top-left-elaqe">
         <a href='tel:'> <Button klass="footer-top-left-btn" daxiliYazi="Xidmət tələb edin"/></a>
         <span> <FiPhoneCall className='footer-phone-icon' /> 
+123 456 789</span>
          </div>
        </div>
        <div className="footer-top-right">
        <div div className="footer-top-right-img"></div>
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
          <form action="" className='footer-center-right-form'>
            <input type="mail" placeholder='E-poçtunuz...' />
            <button>İndi Abunə Olun</button>
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