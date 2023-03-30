import React from 'react'
import './css/Homeplan.css'
import Button from './Button'
import { Link } from 'react-router-dom'


const Homeplan = () => {
    return (
        <>
            <div className='home-plan'>

                <div className='home-plan-left' data-aos="fade-right" data-aos-delay="300">
                    <h5 data-aos="fade-right" data-aos-delay="500">Hər şeyi qorumaq</h5>
                    <h1 data-aos="fade-right" data-aos-delay="700">Necə işləyirik</h1>
                    <p data-aos="fade-right" data-aos-delay="800">İcazə verin, dərdini tərifləyim, hamıdan yaxşısı olsun.</p>
               <Link to='xidmetler' data-aos="fade-right" data-aos-delay="900" >  <Button daxiliYazi="Xidmətlərə baxın" klass="home-plan-left-button" /></Link>
                </div>
                <div className='home-plan-right'>
                    <div className="home-plan-right-card" data-aos="fade-up" data-aos-delay="300"  >
                        <h6>01</h6>
                        <h1>Müəyyən etmək</h1>
                        <div className='home-plan-right-altxett'></div>
                        <p>Müştəri yüksək səviyyəli müştəri xidmətinə nail ola bilməlidir.</p>
                    </div>
                    <div className="home-plan-right-card" data-aos="fade-up" data-aos-delay="600"  >
                        <h6>02</h6>
                        <h1>Plan</h1>
                        <div className='home-plan-right-altxett'></div>
                        <p>Müştəri yüksək səviyyəli müştəri xidmətinə nail ola bilməlidir.</p>
                    </div>
                    <div className="home-plan-right-card" data-aos="fade-up" data-aos-delay="700"  >
                        <h6>03</h6>
                        <h1>İcra etmək</h1>
                        <div className='home-plan-right-altxett'></div>
                        <p>Müştəri yüksək səviyyəli müştəri xidmətinə nail ola bilməlidir.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Homeplan