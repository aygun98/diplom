import React from 'react'
import './css/Homeawards.css'
import Awards from './Awards'
// import Homeawards from './Homeawards'
import { RiUserStarLine } from 'react-icons/ri'
import { MdOutlineApartment } from 'react-icons/md'
import { SlBadge } from 'react-icons/sl'
import { GiLaurelsTrophy } from 'react-icons/gi'

const Homeawards = () => {
  return (
   <>
   <div className='home-awards'  data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
        <Awards klass='home-award' icon={<RiUserStarLine className='home-award-star-icon' />} h1='1200+' h6='Xoşbəxt Müştərilər' />
        <Awards klass='home-award' icon={<MdOutlineApartment className='home-award-star-icon' />} h1='35+' h6='Filiallar' />
        <Awards klass='home-award' icon={<SlBadge className='home-award-star-icon' />} h1='2500+' h6='Layihələr Tamamlandı' />
        <Awards klass='home-award' icon={<GiLaurelsTrophy className='home-award-star-icon' />} h1='45+' h6='Mükafatlar qazanın' />
      </div>
   </>
  )
}

export default Homeawards