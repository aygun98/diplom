import React from 'react'
import './css/ServiceDetailCanvas.css'
import { Link } from 'react-router-dom'
import Button from './Button'
import Canvas from './Canvas'


const ServiceDetailCanvas = () => {
  return (
    <>
    <div className="service-detail-canvas">
        <div className="service-detail-canvas-left">
            <h6>Xidmətə Baxış</h6>
            <h1>Gözlədiyiniz Keyfiyyət, Layiq Olduğunuz Xidmət!</h1>
            <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək. Torpağın yurdu kimi, mərsiyə də, torpağın onbaşı, aslanın yastığı.</p>
       <Link to='/elaqe'><Button klass='service-detail-canvas-btn' daxiliYazi='Əlaqədə olmaq'/></Link>
        </div>
        <div className="service-detail-canvas-right">
            <div className="service-detail-canvas-right-faiz">
        <Canvas faiz='92'/>
                <h2>Layihə Tamamlandı</h2>
                <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək.</p>
            </div>
            <div className="service-detail-canvas-right-faiz">
                <Canvas faiz='86'/>
                <h2>Məmnun Müştərilər</h2>
                <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək.</p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default ServiceDetailCanvas