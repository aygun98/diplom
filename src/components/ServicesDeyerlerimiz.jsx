import React from 'react'
import './css/ServicesDeyerlerimiz.css'
import { RiUserStarLine } from 'react-icons/ri'
import { MdOutlineApartment } from 'react-icons/md'
import { SlBadge } from 'react-icons/sl'
import { GiLaurelsTrophy } from 'react-icons/gi'
import Awards from './Awards'

const ServicesDeyerlerimiz = () => {
    return (
        <>
            <div className="sevrices-deyerlerimiz">
                <div className="sevrices-deyerlerimiz-left">
                    <h6>Dəyərlərimiz</h6>
                    <h1>Bacarıqlı Peşəkarlardan <br /> ibarət Təcrübəli Komanda</h1>
                    <p>Curabitur id sem sit amet nibh vulputate tincidunt idi həyatda. 
                         Morbi vehicules, purus quis lacinia vehicules, indi indi makiyajdır,  qoy mənim vulputat turpis üçün nifrət qapısı olsun. İndi ona çarpayı lazımdır.</p>
                </div>
                <div className="sevrices-deyerlerimiz-right">
                    <div className='sevrices-deyerlerimiz-right-top'>

                        < Awards klass='sevrices-award home-award' icon={<RiUserStarLine className='service-award-star-icon' />} h1='1200+' h6='Xoşbəxt Müştərilər' />
                        <Awards klass='sevrices-award home-award' icon={<MdOutlineApartment className='service-award-star-icon' />} h1='35+' h6='Filiallar' />


                        {/* <div className='sevice-deyerlerimiz-card'>
                        
                        <span>
                            <h1>1200+</h1>
                           <p>Xoşbəxt Müştərilər</p>
                        </span>
                    </div>
                    <div className='sevice-deyerlerimiz-card'>
                        
                        <span>
                            <h1>2500+</h1>
                           <p>Layihələr Tamamlandı</p>
                        </span>
                    </div> */}
                    </div>
                    <div className='sevrices-deyerlerimiz-right-bottom'>
                        <Awards klass='sevrices-award home-award' icon={<SlBadge className='service-award-star-icon' />} h1='2500+' h6='Layihələr Tamamlandı' />
                        <Awards klass='sevrices-award home-award' icon={<GiLaurelsTrophy className='service-award-star-icon' />} h1='45+' h6='Mükafatlar qazanın' />
                        {/* <div className='sevice-deyerlerimiz-card'>
                        
                        <span>
                            <h1>35+</h1>
                           <p>Filiallar</p>
                        </span>
                    </div>
                    <div className='sevice-deyerlerimiz-card'>
                        
                        <span>
                            <h1>45+</h1>
                           <p>Mükafatlar qazanın</p>
                        </span>
                    </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesDeyerlerimiz