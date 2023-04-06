import React, {useState} from 'react'
import './css/Homeqorumaq.css'
import {BsClockHistory} from 'react-icons/bs'
import {MdOutlineEngineering} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsPlayCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
//modal qutu
import PlayModalQutu from './PlayModalQutu'

const Homeqorumaq = () => {
  const [openModalIframe, setOpenModalIframe ] = useState(false)
  return (
    <div className='home-qorumaq-container'>
        <div className="home-qorumaq-left" >
        <span data-aos="fade-up"  data-aos-duration="600" className='home-qorumaq-left-icon-container'><BsPlayCircleFill  className='home-qorumaq-left-icon openModalQutu' onClick={()=>{ setOpenModalIframe(true)}}/></span>
        {openModalIframe && < PlayModalQutu closeModalIframe={setOpenModalIframe}/>}
        </div>
        <div className="home-qorumaq-right" >
            <h6  data-aos="fade-up"  data-aos-delay="500" data-aos-duration="500" >Hər şeyi qorumaq</h6>
            <h1 data-aos="fade-up" data-aos-delay="550" data-aos-duration="500" >Gözlədiyiniz Keyfiyyət, Layiq Olduğunuz Xidmət!</h1>
            <p data-aos="fade-up"  data-aos-delay="590"data-aos-duration="500" >Qoy ağrının özü amet consectetur adipiscing elitellus luctus ipsuma no pulvinar dapibus maecenas maximus viverra malesuada elitellus luctus ipsuma</p>
            <div className='home-qorumaq-right-card'>
                <div className="home-qorumaq-right-card-left" data-aos="fade-up" data-aos-duration="500"   data-aos-delay="500">
                <BsClockHistory  className='home-qorumaq-right-card-left-icon'/>
                <h2>24/7 Mövcudluq</h2>
                <p>Deyirdilər ki, biz çirkin və eybəcər dinissimin sonunda yaşayırıq.</p>
                <Link to='xidmetler' >Daha çox Gör <AiOutlineArrowRight/> </Link>
                </div>
                <div className="home-qorumaq-right-card-right" data-aos="fade-up" data-aos-duration="500"   data-aos-delay="550">
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