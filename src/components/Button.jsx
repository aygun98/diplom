import React from 'react'
import './css/Button.css'
// import {IoMdArrowForward} from 'react-icons/io'

const Button = ({klass, daxiliYazi, daxiliIcon}) => {
  return (
    <>
    <button className={klass}> <span>{daxiliYazi} {daxiliIcon && daxiliIcon} </span> </button>
    </>
  )
}

export default Button