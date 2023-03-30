import React from 'react'
import './css/Homeqorumaq.css'
import {BsClockHistory} from 'react-icons/bs'
import {MdOutlineEngineering} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsPlayCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Homeqorumaq = () => {
  return (
    <div className='home-qorumaq-container'>
        <div className="home-qorumaq-left">
        <span className='home-qorumaq-left-icon-container'><BsPlayCircleFill className='home-qorumaq-left-icon'/></span>
        </div>
        <div className="home-qorumaq-right">
            <h6>Hər şeyi qorumaq</h6>
            <h1>Gözlədiyiniz Keyfiyyət, Layiq Olduğunuz Xidmət!</h1>
            <p>Qoy ağrının özü amet consectetur adipiscing elitellus luctus ipsuma no pulvinar dapibus maecenas maximus viverra malesuada elitellus luctus ipsuma</p>
            <div className='home-qorumaq-right-card'>
                <div className="home-qorumaq-right-card-left">
                <BsClockHistory  className='home-qorumaq-right-card-left-icon'/>
                <h2>24/7 Mövcudluq</h2>
                <p>Deyirdilər ki, biz çirkin və eybəcər dinissimin sonunda yaşayırıq.</p>
                <Link to='xidmetler' >Daha çox Gör <AiOutlineArrowRight/> </Link>
                </div>
                <div className="home-qorumaq-right-card-right">
                   <MdOutlineEngineering className='home-qorumaq-right-card-right-icon'/> 
                   <h2>Peşəkar Komanda</h2>
                <p>Deyirdilər ki, biz çirkin və eybəcər dinissimin sonunda yaşayırıq.</p>
                <Link to='xidmetler' >Daha çox Gör <AiOutlineArrowRight/> </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Homeqorumaq