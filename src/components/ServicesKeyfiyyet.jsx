import React from 'react'
import './css/ServicesKeyfiyyet.css'
import {MdOutlineEngineering} from 'react-icons/md'
import {SlBadge} from 'react-icons/sl'
import {SlPeople} from 'react-icons/sl'


const ServicesKeyfiyyet = () => {
  return (
   <>

   <div className="service-keyfiyyet-container">
    <div className="service-keyfiyyet-left">
        <div className='service-keyfiyyet-left-text-qutu'>
            <MdOutlineEngineering/>
            <h2>Ən Keyfiyyətli Xidməti Təqdim edirik</h2>
            <p>Yastıq, hava yolu, yastıq deyə bir şey yoxdur.</p>
        </div>
    </div>
    <div className="service-keyfiyyet-right">
          <h6>Hər şeyi qorumaq</h6>
          <h1>Ən yaxşı Handyman Təcili Xidmətləri təmin edin</h1>
          <p>Aenean cursus vehicula diam, vitae euismod enim lobortis in Amma bəzi makiyaj, kədərli bir tanrı kimi əyilir. Əmlak sahibinin həyatının müəllifi. Cizgi filmi hekayəsi.</p>
          <div className="service-keyfiyyet-right-top">
            <div className='service-keyfiyyet-right-top-left'><SlBadge /></div>
            <div className='service-keyfiyyet-right-top-right'>
                <h1>Ən Keyfiyyətli Xidmətlər</h1>
                <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək.</p>
            </div>
          </div>
          <div className="service-keyfiyyet-right-top">
          <div className='service-keyfiyyet-right-top-left'><SlPeople/></div>
            <div className='service-keyfiyyet-right-top-right'>
                <h1>Zəmanət və Baxım</h1>
                <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək.</p>
            </div>
          </div>

    </div>

   </div>
   </>
  )
}

export default ServicesKeyfiyyet