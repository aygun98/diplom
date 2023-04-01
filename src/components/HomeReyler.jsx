import React from 'react'
import './css/HomeReyler.css'
import {AiFillStar} from 'react-icons/ai'
import {RiNumber9} from 'react-icons/ri'
//swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay} from "swiper";
const HomeReyler = () => {
  return (
    <>
  <div className="home-reyler-container">
    <div className="home-reyler-left">
        <h5>Rəylər</h5>
        <h1>Müştərimiz deyir</h1>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='home-reyler-swiper-container'>
                <div className='home-reyler-swiper-title'>
                   <AiFillStar className='home-reyler-star-icon'/>
                   <AiFillStar className='home-reyler-star-icon'/>
                   <AiFillStar className='home-reyler-star-icon'/>
                   <AiFillStar className='home-reyler-star-icon'/>
                   <AiFillStar className='home-reyler-star-icon'/>
                    
                </div>

                <q className='home-reyler-swiper-body'>Sed enim lectus, porttitor eu elit nec aliquet auctor nunc. Ut in tempor ex. Aliquam aliquet rhoncus massa eget eleifend. In suscipit, sapien id maximus laoreet, augue maximus nisl, sit amet rhoncus ligula tellus eu augue.' Paul Rodriguez Member Naturfood 'Sed enim lectus, porttitor eu elit nec, aliquet auctor nunc. Ut in tempor ex. Aliquam aliquet rhoncus massa eget eleifend. In suscipit, sapien id maximus laoreet, augue libero maximus nisl, sit amet rhoncus ligula tellus eu augue.</q>
              <div className='home-reyler-swiper-footer'>
                <div className='home-reyler-swiper-footer-img-jonathan'></div>
                <div className="home-reyler-swiper-footer-person">
                    <h4>Jonathan</h4>
                    <p>Müştəri</p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='home-reyler-swiper-container'>
                <div className='home-reyler-swiper-title'>
                   <AiFillStar className='home-reyler-star-icon'/>
                   <AiFillStar className='home-reyler-star-icon'/>
                   <AiFillStar className='home-reyler-star-icon'/>
                   <AiFillStar className='home-reyler-star-icon'/>
                   <AiFillStar className='home-reyler-star-icon'/>
                    
                </div>

                <q className='home-reyler-swiper-body'>Sed enim lectus, porttitor eu elit nec aliquet auctor nunc. Ut in tempor ex. Aliquam aliquet rhoncus massa eget eleifend. In suscipit, sapien id maximus laoreet, augue maximus nisl, sit amet rhoncus ligula tellus eu augue.' Paul Rodriguez Member Naturfood 'Sed enim lectus, porttitor eu elit nec, aliquet auctor nunc. Ut in tempor ex. Aliquam aliquet rhoncus massa eget eleifend. In suscipit, sapien id maximus laoreet, augue libero maximus nisl, sit amet rhoncus ligula tellus eu augue.</q>
              <div className='home-reyler-swiper-footer'>
                <div className='home-reyler-swiper-footer-img-paul'></div>
                <div className="home-reyler-swiper-footer-person">
                    <h4>Paul Gilbert</h4>
                    <p>Müştəri</p>
                </div>
              </div>
            </div>
        </SwiperSlide>
       
      </Swiper>




    </div>
    <div className="home-reyler-right">
        <div className='home-reyler-right-nomre'>
            
             <RiNumber9 className='home-reyler-right-nomre-icon home-reyler-right-nomre-icon-margin '/>
             <RiNumber9 className='home-reyler-right-nomre-icon'/>
             </div>
        <div className='home-reyler-right-img'></div>

    </div>
  </div>

    </>
  )
}

export default HomeReyler