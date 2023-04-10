import React from 'react'
import './css/OverlayMenuSearchbtn.css'
import Data from '../data.json'
import Searchbtn from './Searchbtn'
import {RxCrossCircled} from 'react-icons/rx'

const OverlayMenuSearchbtn = ({closeModalSearch}) => {
  return (
    <div className='overlay-menu-search-btn'>
        <RxCrossCircled className='overlay-menu-search-cross-icon' onClick={()=> closeModalSearch(false)}/>
    <Searchbtn placeholders="Axtar..." datalar={Data}/>
    </div>
  )
}

export default OverlayMenuSearchbtn
