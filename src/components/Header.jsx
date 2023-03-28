import React from 'react'
import Navbar from './Navbar'
import './css/Header.css'
import { FiPhoneCall } from 'react-icons/fi'
import { GoMailRead } from 'react-icons/go'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'

const Header = () => {
  return (
    <>
      <div className='header-top'>

        <div className="header-top-left">
          <h6>Hər hansı bir kömək lazımdır?</h6>
          <a href="tel:+123 456 789"><FiPhoneCall className='header-top-left-icon' /> +123 456 789</a>
          <a href="mailto:info@fixano.com"><GoMailRead className='header-top-left-icon'/> info@fixano.com</a>
        </div>
        <div className="header-top-right">
          <h6>Bizi izlə :</h6>
          <BsFacebook className='header-top-right-icon' />
          <AiOutlineTwitter className='header-top-right-icon' />
          <AiFillYoutube className='header-top-right-icon' />
          <AiOutlineInstagram className='header-top-right-icon' />

        </div>
      </div>
      <Navbar />

    </>
  )
}

export default Header