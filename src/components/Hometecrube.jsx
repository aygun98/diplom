import React from 'react'
import './css/Hometecrube.css'
import { AiFillCheckSquare } from 'react-icons/ai'

import Button from './Button'
import { Link } from 'react-router-dom'


const Hometecrube = () => {
  return (
    <>
    <div className='home-tecrube'>
          <div className='home-tecrube-img'>
            <div className='tecrube-img-top'></div>
            <div className='tecrube-img-bottom'>
              <div className='tecrube-img-bottom-left'  data-aos="fade-right"></div>
              <div className='tecrube-img-bottom-right'  data-aos="fade-right" data-aos-delay="500">
                <h4><span>12+  <br /></span>İllərin Təcrübəsi</h4>
              </div>
            </div>
          </div>
          <div className='home-tecrube-text'>
            <h6 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">Hər şeyi qorumaq</h6>
            <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="400">Evinizin Problemləri Üçün Mükəmməl Həlli Təklif edirik</h1>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="500">Aenean cursus vehicula diam, vitae euismod enim lobortis in Amma bəzi makiyaj, kədərli bir tanrı kimi əyilir. Əmlak sahibinin həyatının müəllifi. Cizgi filmi hekayəsi.</p>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Sabah müəllif ox atacaq. Odio porta laoreet doc, and convallis lectus vulputate. Hətta vaxt ligula malesuada eros feugiat pulvinar</p>
            <div className='home-tecrube-onay'>
              <div className='home-tecrube-onay-left' data-aos="fade-left" data-aos-delay="400">
                <span><AiFillCheckSquare className='home-tecrube-onay-icon' /><small>Keyfiyyətə Nəzarət Sistemi</small></span>
                <span><AiFillCheckSquare className='home-tecrube-onay-icon' /><small>Məmnuniyyət Zəmanəti</small></span>
                <span><AiFillCheckSquare className='home-tecrube-onay-icon' /><small>Peşəkar Heyət</small></span>
              </div>

              <div className='home-tecrube-onay-right' data-aos="fade-left" data-aos-delay="600">
              <span> <AiFillCheckSquare className='home-tecrube-onay-icon' /><small>Peşəkar və İxtisaslı</small></span>
              <span><AiFillCheckSquare  className='home-tecrube-onay-icon'/><small>Yüksək Keyfiyyətli Dizayn</small></span>
              <span><AiFillCheckSquare className='home-tecrube-onay-icon'/><small>Məmnuniyyət Zəmanəti</small></span>
              </div>
            </div>
          <Link to='haqqimizda' data-aos="fade-left" data-aos-delay="700"> <Button daxiliYazi='Haqqımızda Ətraflı' klass='home-tecrube-button' /></Link>
          </div>
        </div>
    </>
  )
}

export default Hometecrube