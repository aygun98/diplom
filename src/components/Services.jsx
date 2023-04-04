import React from 'react'
import CompleHeaders from './CompleHeaders'
import ServicesKeyfiyyet from './ServicesKeyfiyyet'
import Homexidmet from './Homexidmet'
import ServicesDeyerlerimiz from './ServicesDeyerlerimiz'

const Services = () => {
  return (
    <>
    <CompleHeaders h6='Səhifələr' h1='Bizim xidmətlə'/>

    <ServicesKeyfiyyet/>
    <Homexidmet/>
    <ServicesDeyerlerimiz/>


    </>
  )
}

export default Services