import React from 'react'
import './css/Home.css'

import Homeheader from './Homeheader'
import Homeawards from './Homeawards'
import Hometecrube from './Hometecrube'
import Homeplan from './Homeplan'
import Homexidmet from './Homexidmet'
import Homeqorumaq from './Homeqorumaq'





const Home = () => {
  return (
    <>
    <Homeheader/>
      <Homeawards/>
      
        <div className='home-padding'>
        <Hometecrube/>
      </div>
        <Homeplan/>
        <Homexidmet/>
        <Homeqorumaq/>

    </>
  )
}

export default Home