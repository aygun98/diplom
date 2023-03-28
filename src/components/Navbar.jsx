import React, {useRef} from 'react'
import './css/Navbar.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { TfiArrowCircleDown } from 'react-icons/tfi'
import { IoMdArrowForward} from 'react-icons/io'
//Button
import Button from './Button'

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
                    <a href="" className="overlay-nav-link">Ana səhifə</a>
                </li>
                <li>

                    <a href="" className="overlay-nav-link">Haqqımızda</a> 
                </li>
                <li>
                    <a href="" className="overlay-nav-link">Səhifələr <TfiArrowCircleDown  className='overlay-arrow-icon'/></a>
                    <ul className="overlay-dropdownmenu overlay-sehife-drop">
                        <a className="overlay-dropdownItem" href="#">Xidmətlər</a>
                        <a className="overlay-dropdownItem" href="#">Xidmət Təfərrüatı</a>
                        <a className="overlay-dropdownItem" href="#">Qiymət Planı</a>

                    </ul>

                </li>
                <li>
                    <a href="" className="overlay-nav-link">Bloq <TfiArrowCircleDown className='overlay-arrow-icon'/></a>
                    <ul className="overlay-dropdownmenu blog-drop">
                        <a className="-overlay-dropdownItem" href="#">Tək Yazı</a>


                    </ul>
                </li>
                <li>

                    <a href="" className="overlay-nav-link">Əlaqə</a>
                </li>

            </div>
            </div>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>

                    <span className="navbar-fabars-icon" ><FaBars className='fabars-icon'  onClick={openOverlay}/></span>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Ana Səhifə</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Haqqımızda</a>
                            </li>
                            <li className="nav-item sehife ">
                                <a className="nav-link " href="#" >
                                    Səhifələr <IoMdArrowDropdown className='iodropicon' />
                                </a>
                                <ul className="dropdownmenu sehife-drop">
                                    <a className="dropdownItem" href="#">Xidmətlər</a>
                                    <a className="dropdownItem" href="#">Xidmət Təfərrüatı</a>
                                    <a className="dropdownItem" href="#">Qiymət Planı</a>

                                </ul>
                            </li>
                            <li className="nav-item  blog">
                                <a className="nav-link " href="#" >
                                    Bloq  <IoMdArrowDropdown className='iodropicon' />
                                </a>
                                <ul className="dropdownmenu blog-drop">
                                    <a className="dropdownItem" href="#">Tək Yazı</a>


                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Əlaqə</a>
                            </li>

                        </ul>
                        <Button klass='navbar-button' daxiliYazi='Görüş təyin etmək' daxiliIcon={<IoMdArrowForward/>} />
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar