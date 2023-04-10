import React from 'react'
import './css/BlogXeberler.css'
import { BsPerson } from 'react-icons/bs'
import { BsCalendar } from 'react-icons/bs'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Button from './Button'

const BlogXeberler = () => {
  return (
    <>
      <div className='blog-xeberler'>
        <div className="blog-xeberler-left">
          <div className="blog-xeberler-left-cards">
           <Link to='/ferqlerimiz'> <div className='blog-xeberler-left-img blog-xeberler-left-img1'><span className='blog-xeberler-left-img-span'>Məsləhətlər və Hiylə</span></div></Link>
            <h1>Drenajın təmizlənməsinə ehtiyacınız olduğunu necə bilmək olar</h1>
            <span><span className='blog-xeberler-left-cards-span'><BsPerson className='blog-xeberler-left-icon' /> admin </span> <span className='blog-xeberler-left-cards-span'><BsCalendar className='blog-xeberler-left-icon' /> 8 dekabr 2022-ci il</span><span className='blog-xeberler-left-cards-span'><AiOutlineFolderOpen className='blog-xeberler-left-icon' />Məsləhətlər və Hiylə</span></span>
            <p>Ana səhifə <IoIosArrowForward /> Tək Yazı Drenaj Təmizlənməsinə Ehtiyac Olduğunuzu Necə Bilirsiniz. Drenaj Təmizləmə Lorem Ipsum Dolor.</p>
            <Link to='/ferqlerimiz'>Daha çox oxu <IoIosArrowRoundForward /></Link>
          </div>
          <div className="blog-xeberler-left-cards">
          <Link to='/ferqlerimiz'> <div className='blog-xeberler-left-img blog-xeberler-left-img2 '><span className='blog-xeberler-left-img-span'>Məsləhətlər və Hiylə</span></div></Link>
            <h1>Drenajın təmizlənməsinə ehtiyacınız olduğunu necə bilmək olar</h1>
            <span><span className='blog-xeberler-left-cards-span'><BsPerson className='blog-xeberler-left-icon' /> admin </span> <span className='blog-xeberler-left-cards-span'><BsCalendar className='blog-xeberler-left-icon' /> 8 dekabr 2022-ci il</span><span className='blog-xeberler-left-cards-span'><AiOutlineFolderOpen className='blog-xeberler-left-icon' />Məsləhətlər və Hiylə</span></span>
            <p>Ana səhifə <IoIosArrowForward /> Tək Yazı Drenaj Təmizlənməsinə Ehtiyac Olduğunuzu Necə Bilirsiniz. Drenaj Təmizləmə Lorem Ipsum Dolor.</p>
            <Link to='/ferqlerimiz'>Daha çox oxu <IoIosArrowRoundForward /></Link>
          </div>
          <div className="blog-xeberler-left-cards">
          <Link to='/ferqlerimiz'> <div className='blog-xeberler-left-img blog-xeberler-left-img3'><span className='blog-xeberler-left-img-span'>Məsləhətlər və Hiylə</span></div></Link>
            <h1>Drenajın təmizlənməsinə ehtiyacınız olduğunu necə bilmək olar</h1>
            <span><span className='blog-xeberler-left-cards-span'><BsPerson className='blog-xeberler-left-icon' /> admin </span> <span className='blog-xeberler-left-cards-span'><BsCalendar className='blog-xeberler-left-icon' /> 8 dekabr 2022-ci il</span><span className='blog-xeberler-left-cards-span'><AiOutlineFolderOpen className='blog-xeberler-left-icon' />Məsləhətlər və Hiylə</span></span>
            <p>Ana səhifə <IoIosArrowForward /> Tək Yazı Drenaj Təmizlənməsinə Ehtiyac Olduğunuzu Necə Bilirsiniz. Drenaj Təmizləmə Lorem Ipsum Dolor.</p>
            <Link to='/ferqlerimiz'>Daha çox oxu <IoIosArrowRoundForward /></Link>
          </div>

        </div>
        <div className="blog-xeberler-right" data-aos="fade-up">
          <span className='blog-xeberler-right-span'><h1>Fixano haqqında</h1></span>
          <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək. Torpağın yurdu kimi, mərsiyə də, torpağın onbaşı, aslanın yastığı.</p>
          <span className='blog-xeberler-right-span'><h1>Son Post</h1></span>
          <div className='blog-xeberler-right-cards'>
            <div className='blog-xeberler-right-card'>
            <Link to='/ferqlerimiz'><div className="blog-xeberler-right-card-img blog-xeberler-left-img1"></div></Link>
              <div className="blog-xeberler-right-card-text">
                <h3>Bir neçə dəqiqə ərzində edə biləcəyiniz 10 ev təmiri</h3>
                <p><BsCalendar/> 8 dekabr 2022-ci il</p>
              </div>
            </div>
           
            <div className='blog-xeberler-right-card'  data-aos="fade-up">
            <Link to='/ferqlerimiz'>   <div className="blog-xeberler-right-card-img blog-xeberler-left-img2"></div></Link>
              <div className="blog-xeberler-right-card-text">
                <h3>Drenajın təmizlənməsinə ehtiyacınız olduğunu necə bilmək olar</h3>
              <p><BsCalendar/> 8 dekabr 2022-ci il</p>
              </div>
            </div>
            <div className='blog-xeberler-right-card'  data-aos="fade-up">
            <Link to='/ferqlerimiz'>  <div className="blog-xeberler-right-card-img blog-xeberler-left-img3"></div></Link>
              <div className="blog-xeberler-right-card-text">
                <h3>Mərkəzi Kondisionerin quraşdırılması və təmiri</h3>
                <p><BsCalendar/> 8 dekabr 2022-ci il</p>
              </div>
            </div>
          </div>
          <div className='blog-xeberler-right-bottom'  data-aos="fade-up">
            <h6>Hər hansı bir kömək lazımdır?</h6>
            <h1>Hər Zaman Təcili Xidmətlər!</h1>
            <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək. Torpağın yurdu kimi, mərsiyə də, torpağın onbaşı, aslanın yastığı.</p>
            <Link to='/elaqe'><Button klass='blog-xeberler-right-bottom-btn' daxiliYazi='Bizimlə Əlaqə Saxlayın'/></Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default BlogXeberler