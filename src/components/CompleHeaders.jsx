import React from 'react'
import './css/CompleHeaders.css'
import {IoIosArrowForward} from 'react-icons/io'

const CompleHeaders = ({h6, h1}) => {
  return (
    <div className='compleHeader-container'>
        <div className="compleHeader-back"  data-aos="fade-right" data-aos-delay="450" data-aos-duration="500"> </div>
        <div className="compleHeader-text">
            <h6 data-aos="fade-right"  data-aos-delay="390" data-aos-duration="500">Ana səhifə <IoIosArrowForward/> {h6}</h6>
            <h1 data-aos="fade-right"  data-aos-delay="350" data-aos-duration="500">{h1}</h1>
            <p data-aos="fade-right"   data-aos-delay="300" data-aos-duration="500">Curabitur porttitor nulla vitae purus eleifend feugiat.</p>
        </div> 
    </div>
  )
}

export default CompleHeaders