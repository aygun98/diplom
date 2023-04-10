import React from 'react'
import './css/ServiceDetailsBaxis.css'
import {MdOutlineEngineering} from 'react-icons/md'
import Accordion from './Accardion'

const ServiceDetailBaxis = () => {
  return (
    <>
    <div className="service-detail">

        <div className="service-detail-left"  data-aos="fade-right" data-aos-duration="500">
            <div className='service-detail-left-box'  data-aos="fade-right" data-aos-duration="500">
              <MdOutlineEngineering className='service-detail-left-icon' data-aos-duration="500"/>
                <h1>24 saat</h1>
                <p>Fövqəladə Hallar üzrə xidmətlər</p>
            </div>
        </div>
        <div className="service-detail-right">
            <h6 data-aos="fade-left" data-aos-duration="500">Xidmətə Baxış</h6>
            <h1 data-aos="fade-left" data-aos-duration="500">Biz Peşəkar Xidmət Təmin edirik</h1>
            <p data-aos="fade-left" data-aos-duration="500">Aenean cursus vehicula diam, vitae euismod enim lobortis in Amma bəzi makiyaj, kədərli bir tanrı kimi əyilir. Əmlak sahibinin həyatının müəllifi. Cizgi filmi hekayəsi.</p>
            <div className='service-detail-right-acardions'>
   <Accordion />
            </div>
        </div>
    </div>
    </>
  )
}

export default ServiceDetailBaxis