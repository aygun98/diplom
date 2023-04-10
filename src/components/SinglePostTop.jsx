import React from 'react'
import './css/SinglePostTop.css'
import { RiNumber9 } from 'react-icons/ri'
import HomeXeberler from './HomeXeberler'

const SinglePostTop = () => {
  return (
    <>
      <div className="single-post">
        <div className="single-post-top">
          <div className='single-post-top-img'  data-aos="fade-up">
            <div className='single-post-top-img-box'  data-aos="fade-up"><h1>Nə Üçün Bizi Seçməlisiniz</h1></div>
            </div>
          <p className='single-post-top-padding'  data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie viverra hendrerit. Nam et ultricies turpis. Sed quis tempus lorem. Quisque ut ex dapibus, aliquet magna in, condimentum nibh. Quisque turpis nibh, gravida et elit at, placerat varius orci. Maecenas scelerisque pulvinar sem, at scelerisque odio gravida pulvinar. Aliquam accumsan risus non lectus placerat lobortis. Maecenas eros tortor, mattis vel dui efficitur, accumsan maximus nunc.</p>
          <p  data-aos="fade-up">Pellentesque nec massa quis urna fringilla ullamcorper. Donec sodales eget justo a fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vel venenatis libero. Aenean accumsan sapien in augue eleifend luctus. Etiam vitae eros a nisl ornare ornare eget ut felis. Vestibulum congue quam et turpis dictum, id accumsan neque laoreet.</p>
          <div className='single-post-top-italic'  data-aos="fade-up">
            <span ><RiNumber9 className='single-post-top-icon' /> <RiNumber9 className='single-post-top-icon'  /></span>
            <i>Aliquam sed ante facilisis, rhoncus lectus ac, volutpat lacus. Sed varius auctor nunc, sit amet faucibus sapien aliquam sit amet. Praesent condimentum dignissim convallis. Curabitur elementum mi ipsum, eget pretium orci fermentum ut. Praesent aliquam ligula quis interdum aliquam. Sed augue est, blandit eu bibendum tempor, tempus in justo. Vivamus in lacus tincidunt metus fermentum faucibus eget ut nibh. Ut viverra urna quis lectus malesuada, id ultricies libero vehicula. Nunc tempor efficitur purus, sed pretium metus pretium eu.</i>
          </div>
        </div>
        

      </div>
          <HomeXeberler/>
    </>
  )
}

export default SinglePostTop