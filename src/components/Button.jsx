import React from 'react'
import './css/Button.css'
// import {IoMdArrowForward} from 'react-icons/io'

const Button = ({klass, daxiliYazi, daxiliIcon}) => {
  return (
    <button className={klass}> {daxiliYazi} {daxiliIcon && daxiliIcon}</button>
  )
}

export default Button