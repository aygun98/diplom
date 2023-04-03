import React from 'react'
import './css/AboutEnd.css'
import {RiNumber9} from 'react-icons/ri'

const AboutEnd = () => {
  return (
    <div className='about-end'>
        <div className='about-end-top'></div>
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