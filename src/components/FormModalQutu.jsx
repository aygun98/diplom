import React from 'react'
import './css/FormModalQutu.css'
import {RxCrossCircled} from 'react-icons/rx'

const FormModalQutu = ({closeModalForm}) => {
  return (
    <span  className='form-modal-qutu-container'>
    <div className='form-modal-qutu'>
        <RxCrossCircled className='form-modal-qutu-icon' onClick={()=> closeModalForm(false)}/>
        <h1>Mesaj Göndərildi!</h1>
        </div>
        </span>
  )
}

export default FormModalQutu
