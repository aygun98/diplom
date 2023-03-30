import React from 'react'
import './css/HomexidmetCard.css'
import Button from './Button'
import { Link } from 'react-router-dom'

const HomexidmetCard = ({sekil, h1}) => {
  return (
    <div className='home-xidmet-card' data-aos="zoom-in" >
        <div className="home-xidmet-card-top"><img src={sekil} alt="" /></div>
        <div className="home-xidmet-card-bottom">
            <h1>{h1}</h1>
            <p>Müştəri çox xoşbəxtdir</p>
          <Link to='xidmetler'>  <Button klass='home-xidmet-card-bottom-button' daxiliYazi="Ətraflı Baxın"/></Link> 
        </div>
    </div>
  )
}

export default HomexidmetCard