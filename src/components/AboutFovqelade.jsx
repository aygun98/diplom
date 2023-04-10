import React from 'react'
import './css/AboutFovqelade.css'
import { AiFillCheckSquare } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineEngineering } from 'react-icons/md'

const AboutFovqelade = () => {
  return (
    <>
    <div className='about-fovqelade'>
        <div className="about-fovqelade-left">
            <h6 data-aos="fade-right"  data-aos-duration="500">Fixano haqqında</h6>
            <h1 data-aos="fade-right"  data-aos-duration="500"> Ev Problemlərinizdə Kömək Edirik</h1>
            <p data-aos="fade-right"   data-aos-duration="500">Ömrünün əvvəlində futbol arxasınca düşəcək. Azad bir gəmi, qəmli və hüznlü həyat istəyir, tibbi oxların hədəfindədir. Təəssüf ki, indi belə deyil. Bu ya qabdır, ya da başqa bir şeydir. Bəzən aclıq gözlənilir və ondan əvvəl.Müdrikliyinin qayğısına qalana qədər, karyerası bitmir. Kədərli futbol qövsü alana qədər. Heç bir hamilə yeniyetmənin şokolada ehtiyacı yoxdur.</p>
            <div className="about-fovqelade-left-checkouts">
                <div className=""  data-aos="fade-right"  data-aos-duration="500">
                    <p><AiFillCheckSquare className='about-fovqelade-left-checkouts-icon' />Keyfiyyətə Nəzarət Sistemi</p>
                    <p><AiFillCheckSquare className='about-fovqelade-left-checkouts-icon' />Məmnuniyyət Zəmanəti</p>
                    <p><AiFillCheckSquare className='about-fovqelade-left-checkouts-icon' />Peşəkar Heyət</p>
                </div>
                <div className=""  data-aos="fade-right"  data-aos-duration="500">
                    <p><AiFillCheckSquare className='about-fovqelade-left-checkouts-icon' />Peşəkar və İxtisaslı</p>
                    <p><AiFillCheckSquare className='about-fovqelade-left-checkouts-icon' />Yüksək Keyfiyyətli Dizayn</p>
                    <p><AiFillCheckSquare className='about-fovqelade-left-checkouts-icon' />Məmnuniyyət Zəmanəti</p>
                </div>
            </div>
            <div className="about-fovqelade-left-elaqe"  data-aos="fade-right"  data-aos-duration="500">
            <span className='about-fovqelade-right-bottom-mexanik'> <FiPhoneCall className='about-fovqelade-left-elaqe-icon' /></span>
                <div>
                    <p>Peşəkar Komandamızla Məsləhətləşin</p>
                    <h1> Zəng Edin +123 456 789</h1>
                </div>
                 </div>
        </div>
        <div className="about-fovqelade-right"  >
            <div className="about-fovqelade-right-top" data-aos="fade-left"  data-aos-duration="500"></div>
            <div className="about-fovqelade-right-bottom" data-aos="fade-left"  data-aos-duration="500">
         <MdOutlineEngineering className='about-fovqelade-right-bottom-mexanik-icon'/>
          <h1>24 Saat</h1>
          <p>Fövqəladə hallar <br /> xidmeti</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutFovqelade