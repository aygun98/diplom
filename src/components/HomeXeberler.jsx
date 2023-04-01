import React from 'react'
import { Link } from 'react-router-dom'
import {BsCalendar} from 'react-icons/bs'
import {MdKeyboardArrowRight} from 'react-icons/md'
import './css/HomeXeberler.css'

import Button from './Button'

const HomeXeberler = () => {
  return (
    <div className='home-xeberler'>
        <div className="home-xeberler-top">
            <h5>Son xəbərlər</h5>
            <h1>Ən Populyar Məqalələr</h1>
            <p>Ağrıma heyfslənirəm, amma elitamı itirdiyimə görə çox üzülürəm.</p>
        </div>
        <div className="home-xeberler-bottom">
            <div className="home-xeberler-bottom-left">
                <div className='home-xeberler-bottom-left-img'></div>
                <h1>Drenajın təmizlənməsinə ehtiyacınız olduğunu necə bilmək olar</h1>
                <h6><BsCalendar/> 8 dekabr 2022-ci il</h6>
                <p>Ana səhifə <MdKeyboardArrowRight/>  Tək Yazı Drenaj Təmizlənməsinə Ehtiyac Olduğunuzu Necə Bilirsiniz</p>
                <Link to="">Daha çox oxu</Link>
            </div>
            <div className="home-xeberler-bottom-center">
              <div className='home-xeberler-bottom-center-img'></div>
                <h1>Bir neçə dəqiqə ərzində edə biləcəyiniz 10 ev təmiri</h1>
                <h6><BsCalendar/> 8 dekabr 2022-ci il</h6>
                <p>Ana səhifə <MdKeyboardArrowRight/>  Tək Yazı Drenaj Təmizlənməsinə Ehtiyac Olduğunuzu Necə Bilirsiniz</p>
                <Link to="">Daha çox oxu</Link>
            </div>
            <div className="home-xeberler-bottom-right">
                <h1>Son Post</h1>
                <div className="home-xeberler-bottom-right-altdanXett"></div>
                  <div className="">
                    <h5>Drenajın təmizlənməsinə ehtiyacınız olduğunu necə bilmək olar</h5>
                    <p> <BsCalendar/>8 dekabr 2022-ci il</p>
                  </div>
                  <div className="">
                <h5>Bir neçə dəqiqə ərzində edə biləcəyiniz 10 ev təmiri</h5>
                <p> <BsCalendar/>8 dekabr 2022-ci il</p>
                  </div>
                  <div className="">
                    <h5>Mərkəzi Kondisionerin quraşdırılması və təmiri</h5>
                  <p> <BsCalendar/>8 dekabr 2022-ci il</p>
                  </div>
                  
              <Link>  <Button klass="home-xeberler-btn" daxiliYazi="Daha çox oxu"/> </Link> 
            </div>
        </div>
    </div>
  )
}

export default HomeXeberler