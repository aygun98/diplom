import React from 'react'
import './css/Home.css'

import Homeheader from './Homeheader'
import Homeawards from './Homeawards'
import Hometecrube from './Hometecrube'





const Home = () => {
  return (
    <>
    <Homeheader/>
      <Homeawards/>
      
        <div className='home-padding'>
        <Hometecrube/>

      </div>
    </>
  )
}

export default Home