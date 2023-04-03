import React from 'react'
import './css/PlayModalQutu.css'
import {RxCrossCircled} from 'react-icons/rx'

const PlayModalQutu = ({closeModalIframe}) => {
  return (
    <div className='home-qorumaq-modal-qutu-container'>
<RxCrossCircled className='moda-cross-icon' onClick={()=> closeModalIframe(false)}/>
          <div className='home-qorumaq-modal-qutu'>
          <iframe  width="760" height="515" src="https://www.youtube.com/embed/tih2LyNKtQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          </div>
  )
}

export default PlayModalQutu