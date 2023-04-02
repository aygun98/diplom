import React from 'react'
import './css/CompleHeaders.css'
import {IoIosArrowForward} from 'react-icons/io'

const CompleHeaders = ({h6, h1}) => {
  return (
    <div className='compleHeader-container'>
        <div className="compleHeader-back"> </div>
        <div className="compleHeader-text">
            <h6>Ana səhifə <IoIosArrowForward/> {h6}</h6>
            <h1>{h1}</h1>
            <p>Curabitur porttitor nulla vitae purus eleifend feugiat.</p>
        </div>
    </div>
  )
}

export default CompleHeaders