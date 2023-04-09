import React from 'react'
import './css/HomeSponsorlar.css'
//json
import HomeSponsorlarJson from '../HomeSponsorlar.json'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//AutoPlay elave etmek
import { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";

const HomeSponsorlar = () => {
  return (
    <div className='home-sponsorlar-swiper-container'>
        <Swiper
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        slidesPerView={4}
        spaceBetween={10}
        modules={[Autoplay]}
        className="sponsorlar-mySwiper"
        breakpoints={{
          327: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          876: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1248: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
         
        }}
      >
       
       
            {HomeSponsorlarJson.map(melumat=>(
           <SwiperSlide key={melumat.id}  className='home-swiper-img-background'> <div className='home-swiper-img-container'><img   src={melumat.sekil} alt="sekil" /></div></SwiperSlide>
        ))}
    
        
      </Swiper>
    </div>
  )
}

export default HomeSponsorlar