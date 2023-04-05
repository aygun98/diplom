import React from 'react'
import './css/ServiceDetail.css'
import CompleHeaders from './CompleHeaders'
import ServiceDetailBaxis from './ServiceDetailBaxis'
import ServiceDetailCanvas from './ServiceDetailCanvas'
// import Canvas from './Canvas'

const ServiceDetail = () => {
  return (
   <>
   <CompleHeaders h6=' Xidmət Təfərrüatı' h1='Baxım Xidməti'/>
   <ServiceDetailBaxis/>
   <ServiceDetailCanvas/>
   {/* <Canvas/> */}
   </>

  )
}

export default ServiceDetail