import React from 'react'
import { Link } from 'react-router-dom'
import {BsCalendar} from 'react-icons/bs'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {BsArrowRight} from 'react-icons/bs'
import './css/HomeXeberler.css'

import Button from './Button'

const HomeXeberler = () => {
  return (
    <div className='home-xeberler'>
        <div className="home-xeberler-top">
            <h5 data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">Son xəbərlər</h5>
            <h1 data-aos="fade-left" data-aos-duration="500" data-aos-delay="550">Ən Populyar Məqalələr</h1>
            <p data-aos="fade-right" data-aos-duration="500" data-aos-delay="600">Ağrıma heyfslənirəm, amma elitamı itirdiyimə görə çox üzülürəm.</p>
        </div>
        <div className="home-xeberler-bottom">
            <div className="home-xeberler-bottom-left"  data-aos="fade-up" data-aos-delay="500"  data-aos-duration="500">
            <Link to="bloq">       <div className='home-xeberler-bottom-left-img'><p>Məsləhətlər və Hiylə</p></div></Link> 
                <h1>Drenajın təmizlənməsinə ehtiyacınız olduğunu necə bilmək olar</h1>
                <h6><BsCalendar className='home-calenar-icon'/> 8 dekabr 2022-ci il</h6>
                <p>Ana səhifə <MdKeyboardArrowRight/>  Tək Yazı Drenaj Təmizlənməsinə Ehtiyac Olduğunuzu Necə Bilirsiniz</p>
                <Link to="bloq">Daha çox oxu <BsArrowRight className='home-xeberler-arrow-icon'/></Link>
            </div>
            <div className="home-xeberler-bottom-center" data-aos="fade-up" data-aos-delay="570"  data-aos-duration="500">
           <Link to="bloq">  <div className='home-xeberler-bottom-center-img'><p>Məsləhətlər və Hiylə</p></div></Link> 
                <h1>Bir neçə dəqiqə ərzində edə biləcəyiniz 10 ev təmiri</h1>
                <h6><BsCalendar className='home-calenar-icon'/> 8 dekabr 2022-ci il</h6>
                <p>Ana səhifə <MdKeyboardArrowRight/>  Tək Yazı Drenaj Təmizlənməsinə Ehtiyac Olduğunuzu Necə Bilirsiniz</p>
                <Link to="bloq">Daha çox oxu <BsArrowRight className='home-xeberler-arrow-icon'/></Link>
            </div>
            <div className="home-xeberler-bottom-right" data-aos="fade-up" data-aos-delay="500"  data-aos-duration="500">
                <h1>Son Post</h1>
                <div className="home-xeberler-bottom-right-altdanXett"></div>
                  <div className="">
                    <h5>Drenajın təmizlənməsinə ehtiyacınız olduğunu necə bilmək olar</h5>
                    <p> <BsCalendar className='home-calenar-icon'/>8 dekabr 2022-ci il</p>
                  </div>
                  <div className="">
                <h5>Bir neçə dəqiqə ərzində edə biləcəyiniz 10 ev təmiri</h5>
                <p> <BsCalendar className='home-calenar-icon'/>8 dekabr 2022-ci il</p>
                  </div>
                  <div className="">
                    <h5>Mərkəzi Kondisionerin quraşdırılması və təmiri</h5>
                  <p> <BsCalendar className='home-calenar-icon'/>8 dekabr 2022-ci il</p>
                  </div>
                  
              <Link to='/haqqimizda'>  <Button klass="home-xeberler-btn" daxiliYazi="Daha çox oxu"/> </Link> 
            </div>
        </div>
    </div>
  )
}

export default HomeXeberler