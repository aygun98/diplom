import React, {useRef} from 'react'
import './css/Navbar.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { TfiArrowCircleDown } from 'react-icons/tfi'
import { IoMdArrowForward} from 'react-icons/io'
//Button
import Button from './Button'
//Link
import { Link } from 'react-router-dom'

const Navbar = () => {
const overlayElement = useRef()
const overlayUnvanarxa = useRef()
  const openOverlay = (e)=>{
       const kliklediyimUnvan = e.target
       if(kliklediyimUnvan.classList.contains('fabars-icon')){
        overlayElement.current.classList.add('aktiv')
        overlayUnvanarxa.current.classList.add('aktiv-arxa')
       }
  }
  const closeOverlay = (e)=>{
       const kliklediyimUnvan = e.target
       if(kliklediyimUnvan.classList.contains('overlay-cross-icon')){
        overlayElement.current.classList.remove('aktiv')
        overlayUnvanarxa.current.classList.remove('aktiv-arxa')
       }
  }
 





    return (
        <>
        <div className='overlay-arxa'  ref={overlayUnvanarxa} > 
            <div className='overlay' ref={overlayElement}>
            <span className='overlay-span-cross-icon' ><RxCross2 className='overlay-cross-icon'  onClick={closeOverlay} /></span>
                <li>
                    <Link to="/" className="overlay-nav-link">Ana səhifə</Link>
                </li>
                <li>

                    <Link to="" className="overlay-nav-link">Haqqımızda</Link> 
                </li>
                <li>
                    <Link to="" className="overlay-nav-link">Səhifələr <TfiArrowCircleDown  className='overlay-arrow-icon'/></Link>
                    <ul className="overlay-dropdownmenu overlay-sehife-drop">
                        <Link className="overlay-dropdownItem" to="#">Xidmətlər</Link>
                        <Link className="overlay-dropdownItem" to="#">Xidmət Təfərrüatı</Link>
                        <Link className="overlay-dropdownItem" to="#">Qiymət Planı</Link>

                    </ul>

                </li>
                <li>
                    <Link to="" className="overlay-nav-link">Bloq <TfiArrowCircleDown className='overlay-arrow-icon'/></Link>
                    <ul className="overlay-dropdownmenu blog-drop">
                        <Link className="-overlay-dropdownItem" to="#">Tək Yazı</Link>


                    </ul>
                </li>
                <li>

                    <Link to="" className="overlay-nav-link">Əlaqə</Link>
                </li>

            </div>
            </div>


            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-aos="fade-down">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"></Link>

                    <span className="navbar-fabars-icon" ><FaBars className='fabars-icon'  onClick={openOverlay}/></span>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="#">Ana Səhifə</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Haqqımızda</Link>
                            </li>
                            <li className="nav-item sehife ">
                                <Link className="nav-link " to="#" >
                                    Səhifələr <IoMdArrowDropdown className='iodropicon' />
                                </Link>
                                <ul className="dropdownmenu sehife-drop">
                                    <Link className="dropdownItem" to="#">Xidmətlər</Link>
                                    <Link className="dropdownItem" to="#">Xidmət Təfərrüatı</Link>
                                    <Link className="dropdownItem" to="#">Qiymət Planı</Link>

                                </ul>
                            </li>
                            <li className="nav-item  blog">
                                <Link className="nav-link " to="#" >
                                    Bloq  <IoMdArrowDropdown className='iodropicon' />
                                </Link>
                                <ul className="dropdownmenu blog-drop">
                                    <Link className="dropdownItem" to="#">Tək Yazı</Link>


                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Əlaqə</Link>
                            </li>

                        </ul>
                        <Button klass='navbar-button' daxiliYazi='Görüş təyin etmək' daxiliIcon={<IoMdArrowForward className='navbar-button-icon'/>} />
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar