import React from 'react'
import './css/Award.css'


const Awards = ({icon, h1, h6}) => {
  return (
    <div className='home-award'>
      <div className='home-award-icon'>{icon}</div>
      <div className='home-award-text'>
        <h1>{h1}</h1>
        <h6>{h6}</h6>
      </div>

    </div>
  )
}

export default Awards