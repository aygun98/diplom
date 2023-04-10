import React from 'react'
import './css/ServiceXidmetQiymeti.css'

const ServiceXidmetQiymeti = () => {
    return (
        <>
            <div className=' service-xidmet-qiymeti'>
                <div className=" service-qiymet-plan-top">  {/* service-qiymet-plani componentinden getirildi bu cod*/}
                    <h6 data-aos="fade-right" data-aos-duration="500">Qiymətlər və Planlar</h6>
                    <h1 data-aos="fade-left" data-aos-duration="500">Sizin üçün Xüsusi Təkliflər</h1>
                    <p data-aos="fade-right" data-aos-duration="500">Ağrıma heyfslənirəm, amma elitamı itirdiyimə görə çox üzülürəm.</p>
                </div>

                <div className=' service-xidmet-qiymeti-bottom'>
                    <div className="service-xidmet-qiymeti-bottom-left" >
                        <div className='service-xidmet-qiymeti-bottom-card' data-aos="fade-right">
                            <div className='service-xidmet-qiymeti-bottom-card-img service-xidmet-qiymeti-bottom-card-img1'></div>
                            <div className='service-xidmet-qiymeti-bottom-card-text'>
                                <h4>Elektrik Təmiri</h4>
                                <p>Duis sapien nibh, heç kimdən ültricies, nə də rutrum.</p>
                            </div>
                            <h1 className='service-xidmet-qiymeti-bottom-card-numer'>$150</h1>

                        </div>
                        <div className='service-xidmet-qiymeti-bottom-card' data-aos="fade-right">
                            <div className='service-xidmet-qiymeti-bottom-card-img service-xidmet-qiymeti-bottom-card-img2'></div>
                            <div className='service-xidmet-qiymeti-bottom-card-text'>
                                <h4>Elektrik Təmiri</h4>
                                <p>Duis sapien nibh, heç kimdən ültricies, nə də rutrum.</p>
                            </div>
                            <h1 className='service-xidmet-qiymeti-bottom-card-numer'>$150</h1>

                        </div>
                    </div>
                    <div className="service-xidmet-qiymeti-bottom-right"  >
                    <div className='service-xidmet-qiymeti-bottom-card'data-aos="fade-left" >
                            <div className='service-xidmet-qiymeti-bottom-card-img  service-xidmet-qiymeti-bottom-card-img3 '></div>
                            <div className='service-xidmet-qiymeti-bottom-card-text'>
                                <h4>Elektrik Təmiri</h4>
                                <p>Duis sapien nibh, heç kimdən ültricies, nə də rutrum.</p>
                            </div>
                            <h1 className='service-xidmet-qiymeti-bottom-card-numer'>$150</h1>

                        </div>
                        <div className='service-xidmet-qiymeti-bottom-card' data-aos="fade-left">
                            <div className='service-xidmet-qiymeti-bottom-card-img service-xidmet-qiymeti-bottom-card-img4'></div>
                            <div className='service-xidmet-qiymeti-bottom-card-text'>
                                <h4>Elektrik Təmiri</h4>
                                <p>Duis sapien nibh, heç kimdən ültricies, nə də rutrum.</p>
                            </div>
                            <h1 className='service-xidmet-qiymeti-bottom-card-numer'>$150</h1>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceXidmetQiymeti