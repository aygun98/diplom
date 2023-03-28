import React from 'react'
import {IoMdArrowForward} from 'react-icons/io'

const Button = ({klass, daxiliYazi, daxiliIcon}) => {
  return (
    <button className={klass}> {daxiliYazi} {daxiliIcon && daxiliIcon}</button>
  )
}

export default Button