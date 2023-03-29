import React from 'react'
import './css/Homeheader.css'
import { FiPhoneCall } from 'react-icons/fi'

const Homeheader = () => {

  

    
  
  return (
   <>
     <div className="home-header-container">
        <div className=' home-header-left-background' data-aos="fade-right" ></div>
        <div className='home-header-text' data-aos="fade-right">
          <h6 data-aos="fade-right" data-aos-delay="300">Etibarlı Xidmet Xidməti</h6>
          <h1 data-aos="fade-right" data-aos-delay="500">Evinizə <br /> peşəkar usta <br /> xidməti</h1>
          <small data-aos="fade-right" data-aos-delay="700">Evdə təmir problemi var? Hər zaman 24 saat təcili yardım xidmətlərinə zəng edin!</small>
          <a href='' className='home-header-call' data-aos="fade-right" data-aos-delay="1000">
            <span className='home-header-span-icon'><FiPhoneCall className='home-header-phone-icon' /> </span><h2>  İndi Bizə Zəng Edin <span>+123 456 789</span></h2>
          </a>
        </div>
      </div>
   </>


  )
}

export default Homeheader