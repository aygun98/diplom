import React from 'react'
import './css/About.css'
import CompleHeaders from './CompleHeaders'
import AboutFovqelade from './AboutFovqelade'
import AboutAcardion from './AboutAcardion'
import AboutFerqli from './AboutFerqli'
import AboutEnd from './AboutEnd'

const About = () => {
  return (
    <>
<CompleHeaders h6='Haqqımızda' h1='Bizim haqqımızda'/>
<AboutFovqelade/>
<AboutAcardion/>
<AboutFerqli/>
<AboutEnd/>
    </>
    
  )
}

export default About