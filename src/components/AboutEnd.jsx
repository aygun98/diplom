import React , {useState}from 'react'
import './css/AboutEnd.css'
import {RiNumber9} from 'react-icons/ri'
import {BsPlayCircleFill} from 'react-icons/bs'

import PlayModalQutu from './PlayModalQutu'

const AboutEnd = () => {
  const [openModalIframe, setOpenModalIframe ] = useState(false)
  return (
    <div className='about-end'>
        <div className='about-end-top'><span className='about-end-top-icon-container'><BsPlayCircleFill className='about-end-top-icon openModalQutu' onClick={()=>{ setOpenModalIframe(true)}}/></span></div>
        {openModalIframe && < PlayModalQutu closeModalIframe={setOpenModalIframe}/>}
        <div div className='about-end-bottom-container'>
            <div className="about-end-bottom">
            <div className='about-end-bottom-icons'>
            <RiNumber9 className='about-end-bottom-nomre-icon-margin '/>
             <RiNumber9 className='about-end-bottom-nomre-icon'/>
            </div>
            <h1>Günün sonunda içməyin asan olduğunu düşünmürəm. Pulsuz iki protein çubuğu.</h1>
           <h6>James Arthur</h6>
        </div>
        </div>
    </div>
  )
}

export default AboutEnd