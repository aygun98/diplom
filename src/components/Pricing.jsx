import React from 'react'
import './css/Pricing.css'
import CompleHeaders from './CompleHeaders'
import ServiceQiymetPlan from './ServiceQiymetPlan'
import ServiceXidmetQiymeti from './ServiceXidmetQiymeti'
const Pricing = () => {
  return (
    <>
    <CompleHeaders h6=' Qiymətlər' h1='Qiymət Planı'/>
    <ServiceQiymetPlan/>
    <ServiceXidmetQiymeti/>
    </>
  )
}

export default Pricing