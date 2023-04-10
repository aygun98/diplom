import React from 'react'
import './css/ServiceQiymetPlan.css'
import Button from './Button'
import {HiCheckBadge} from 'react-icons/hi2'
import {RxHome} from 'react-icons/rx'
import {MdOutlineApartment} from 'react-icons/md'
import {MdOutlineHomeWork} from 'react-icons/md'
 
const ServiceQiymetPlan = () => {
  return (
    <>
    <div className="service-qiymet-plan">
    <div className="service-qiymet-plan-top">
        <h6  data-aos="fade-right" data-aos-duration="500">Qiymətlər və Planlar</h6>
        <h1  data-aos="fade-left" data-aos-duration="500">Sizin üçün Xüsusi Təkliflər</h1>
        <p  data-aos="fade-right" data-aos-duration="500">Ağrıma heyfslənirəm, amma elitamı itirdiyimə görə çox üzülürəm.</p>
    </div>
    <div className="service-qiymet-plan-bottom">
        <div className='service-qiymet-plan-bottom-card qiymet-card1' data-aos="zoom-in">
         <RxHome className='service-qiymet-plan-bottom-home-icon'/>
          <h2>Şəxsi Plan</h2>  
          <h1> <span>$19</span>/Ay</h1> 
          <h3>Xüsusiyyətləri</h3>
          <p>Bu paketlə əldə edəcəyiniz faydalar</p>
          <div className='service-qiymet-plan-bottom-check'>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>Pulsuz Konsultasiya</p>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>Aylıq Müayinə</p>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>Baxım və Təmir</p>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>30 Gün Zəmanət</p>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>24/7 Dəstək</p>

          </div>
          <Button klass='service-qiymet-plan-bottom-btn' daxiliYazi='Başlamaq'/>
          </div>
        <div className='service-qiymet-plan-bottom-card qiymet-card2' data-aos="zoom-in">
         <MdOutlineApartment className='service-qiymet-plan-bottom-home-icon'/>
          <h2>Yaşayış Planı</h2>  
          <h1> <span>$49</span>/Ay</h1> 
          <h3>Xüsusiyyətləri</h3>
          <p>Bu paketlə əldə edəcəyiniz faydalar</p>
          <div className='service-qiymet-plan-bottom-check'>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>Pulsuz Konsultasiya</p>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>Aylıq Müayinə</p>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>Baxım və Təmir</p>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>30 Gün Zəmanət</p>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>24/7 Dəstək</p>

          </div>
          <Button  klass='service-qiymet-plan-bottom-btn' daxiliYazi='Başlamaq'/>
          </div>
        <div className='service-qiymet-plan-bottom-card qiymet-card3' data-aos="zoom-in">
         <MdOutlineHomeWork className='service-qiymet-plan-bottom-home-icon'/>
          <h2>Korporativ Plan</h2>  
          <h1> <span>$79</span>/Ay</h1> 
          <h3>Xüsusiyyətləri</h3>
          <p>Bu paketlə əldə edəcəyiniz faydalar</p>
          <div className='service-qiymet-plan-bottom-check'>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>Pulsuz Konsultasiya</p>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>Aylıq Müayinə</p>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>Baxım və Təmir</p>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>30 Gün Zəmanət</p>
           <p><HiCheckBadge className='service-qiymet-plan-bottom-check-icon'/>24/7 Dəstək</p>

          
          </div>
          <Button  klass='service-qiymet-plan-bottom-btn' daxiliYazi='Başlamaq'/>
          </div>
          
        
    </div>
</div>


    
    </>
  )
}

export default ServiceQiymetPlan