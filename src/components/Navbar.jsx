import React, {useRef, useEffect} from 'react'
import Data from '../data.json'
import './css/Navbar.css'
import Searchbtn from './Searchbtn'
// import { IoMdArrowDropdown } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { TfiArrowCircleDown } from 'react-icons/tfi'
// import { IoMdArrowForward} from 'react-icons/io'
import { IoIosArrowDown} from 'react-icons/io'
//Button
// import Button from './Button'
//Link
import { Link } from 'react-router-dom'
//moadlform
// import NavModulForm from './NavModulForm'
// searcbtn


const Navbar = () => {


// overlay
const overlayElement = useRef()
const overlayUnvanarxa = useRef()
  const openOverlay = (e)=>{
       const kliklediyimUnvan = e.target
       if(kliklediyimUnvan.classList.contains('fabars-icon')){
        overlayElement.current.classList.add('aktiv')
        overlayUnvanarxa.current.classList.add('aktiv-arxa')
       }
       if(kliklediyimUnvan.classList.contains('navbar-fabars-icon')){
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
       if(kliklediyimUnvan.classList.contains('overlay-span-cross-icon')){
        overlayElement.current.classList.remove('aktiv')
        overlayUnvanarxa.current.classList.remove('aktiv-arxa')
       }
      
  }
 
// sehife ve blog drop acmaq overal menuda
const dropSehife = useRef()
const dropSehifebloq = useRef()
const dropSehifeAc = (e)=>{
const kliklediyimUnvan = e.target
if(kliklediyimUnvan.classList.contains('overlay-sehife')){
dropSehife.current.classList.toggle('drop-ac')
}

}

const dropBloqeAc = (e)=>{
const kliklediyimUnvan = e.target
if(kliklediyimUnvan.classList.contains('overlay-bloq')){
    dropSehifebloq.current.classList.toggle('drop-ac')
}

}






//navbar scroll sticky
useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
        window.removeEventListener("scroll", listenScrollEvent);
    }
}, []);


const NavBarUnvani = useRef()
const listenScrollEvent = () => {
    if (window.scrollY >= 60) {
        NavBarUnvani.current.classList.add("sticky-padding");
    } else if (window.scrollY <= 60) {
       NavBarUnvani.current.classList.remove("sticky-padding");
    }
};






    return (
        <>
        <div className='overlay-arxa'  ref={overlayUnvanarxa} > 
            <div className='overlay' ref={overlayElement}>
            <span className='overlay-span-cross-icon' ><RxCross2 className='overlay-cross-icon'  onClick={closeOverlay} /></span>
                <li  >
                    <Link to="/" className="overlay-nav-link" >Ana səhifə</Link>
                </li>
                <li>

                    <Link to="haqqimizda" className="overlay-nav-link" >Haqqımızda</Link> 
                </li>
                <li>
                    <a href='#' className=" overlay-sehife overlay-nav-link "  onClick={dropSehifeAc}>Səhifələr <TfiArrowCircleDown  className='overlay-arrow-icon'/></a>
                    <ul className="overlay-sehife-drop overlay-dropdownMenu " ref={dropSehife}>
                        <Link className="overlay-dropdownItem" to="xidmetler">Xidmətlər</Link>
                        <Link className="overlay-dropdownItem" to="xidmet tefferuati">Xidmət Təfərrüatı</Link>
                        <Link className="overlay-dropdownItem" to="qiymet">Qiymət Planı</Link>

                    </ul>

                </li>
                <li>
                    <Link to="bloq" className="overlay-bloq overlay-nav-link  " onClick={dropBloqeAc} >Bloq <TfiArrowCircleDown className='overlay-arrow-icon'/></Link>
                    <ul className=" bloq-drop overlay-dropdownMenu " ref={dropSehifebloq}>
                        <Link className="overlay-dropdownItem" to="ferqlerimiz">Fərqlərimiz</Link>


                    </ul>
                </li>
                <li>

                    <Link to="elaqe" className="overlay-nav-link">Əlaqə</Link>
                </li>
                <Searchbtn  placeholders="Axtar..." datalar={Data}/>

            </div>
            </div>


            <nav className="navbar navbar-expand-lg bg-body-tertiary" ref={NavBarUnvani}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"></Link>

                    <span className="navbar-fabars-icon" ><FaBars className='fabars-icon'  onClick={openOverlay} /></span>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Ana Səhifə</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="haqqimizda">Haqqımızda</Link>
                            </li>
                            <li className="nav-item sehife ">
                                <a className="nav-link " href='#' >
                                    Səhifələr <IoIosArrowDown className='iodropicon' />
                                </a>
                                <ul className="dropdownmenu sehife-drop">
                                    <Link className="dropdownItem" to="xidmetler">Xidmətlər</Link>
                                    <Link className="dropdownItem" to="xidmet tefferuati">Xidmət Təfərrüatı</Link>
                                    <Link className="dropdownItem" to="qiymet">Qiymət Planı</Link>

                                </ul>
                            </li>
                            <li className="nav-item  blog">
                                <Link className="nav-link " to="bloq" >
                                    Bloq  <IoIosArrowDown className='iodropicon' />
                                </Link>
                                <ul className="dropdownmenu blog-drop">
                                    <Link className="dropdownItem" to="ferqlerimiz">Fərqlərimiz</Link>


                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="elaqe">Əlaqə</Link>
                            </li>

                        </ul>
                        {/* <Button klass='navbar-button' daxiliYazi='Görüş təyin etmək' daxiliIcon={<IoMdArrowForward className='navbar-button-icon'/>} /> */}
                       <Searchbtn placeholders="Axtar..." datalar={Data}/>
                       
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar