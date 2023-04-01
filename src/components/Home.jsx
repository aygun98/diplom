import React from 'react'
import './css/Home.css'

import Homeheader from './Homeheader'
import Homeawards from './Homeawards'
import Hometecrube from './Hometecrube'
import Homeplan from './Homeplan'
import Homexidmet from './Homexidmet'
import Homeqorumaq from './Homeqorumaq'
import HomeReyler from './HomeReyler'
import HomeSponsorlar from './HomeSponsorlar'
import HomeXeberler from './HomeXeberler'





const Home = () => {
  return (
    <><div className='home'> 
    <Homeheader/>
      <Homeawards/>
      
        <div className='home-padding'>
        <Hometecrube/>
      </div>
        <Homeplan/>
        <Homexidmet/>
        <Homeqorumaq/>
        <HomeReyler/>
        <HomeSponsorlar/>
        <HomeXeberler/>
        </div>
    </>
  )
}

export default Home