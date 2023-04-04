import React from 'react'
import CompleHeaders from './CompleHeaders'
import ServicesKeyfiyyet from './ServicesKeyfiyyet'
import Homexidmet from './Homexidmet'
import ServicesDeyerlerimiz from './ServicesDeyerlerimiz'
import HomeReyler from './HomeReyler'
import HomeSponsorlar from './HomeSponsorlar'

const Services = () => {
  return (
    <>
    <CompleHeaders h6='Səhifələr' h1='Bizim xidmətlə'/>

    <ServicesKeyfiyyet/>
    <Homexidmet/>
    <ServicesDeyerlerimiz/>
    <HomeReyler/>
    <HomeSponsorlar/>

    </>
  )
}

export default Services