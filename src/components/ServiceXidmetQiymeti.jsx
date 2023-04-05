import React from 'react'
import './css/ServiceXidmetQiymeti.css'

const ServiceXidmetQiymeti = () => {
    return (
        <>
            <div className=' service-xidmet-qiymeti'>
                <div className=" service-qiymet-plan-top">  {/* service-qiymet-plani componentinden getirildi bu cod*/}
                    <h6>Qiymətlər və Planlar</h6>
                    <h1>Sizin üçün Xüsusi Təkliflər</h1>
                    <p>Ağrıma heyfslənirəm, amma elitamı itirdiyimə görə çox üzülürəm.</p>
                </div>

                <div className=' service-xidmet-qiymeti-bottom'>
                    <div className="service-xidmet-qiymeti-bottom-left">
                        <div className='service-xidmet-qiymeti-bottom-card'>
                            <div className='service-xidmet-qiymeti-bottom-card-img service-xidmet-qiymeti-bottom-card-img1'></div>
                            <div className='service-xidmet-qiymeti-bottom-card-text'>
                                <h4>Elektrik Təmiri</h4>
                                <p>Duis sapien nibh, heç kimdən ültricies, nə də rutrum.</p>
                            </div>
                            <h1 className='service-xidmet-qiymeti-bottom-card-numer'>$150</h1>

                        </div>
                        <div className='service-xidmet-qiymeti-bottom-card'>
                            <div className='service-xidmet-qiymeti-bottom-card-img service-xidmet-qiymeti-bottom-card-img2'></div>
                            <div className='service-xidmet-qiymeti-bottom-card-text'>
                                <h4>Elektrik Təmiri</h4>
                                <p>Duis sapien nibh, heç kimdən ültricies, nə də rutrum.</p>
                            </div>
                            <h1 className='service-xidmet-qiymeti-bottom-card-numer'>$150</h1>

                        </div>
                    </div>
                    <div className="service-xidmet-qiymeti-bottom-right">
                    <div className='service-xidmet-qiymeti-bottom-card'>
                            <div className='service-xidmet-qiymeti-bottom-card-img  service-xidmet-qiymeti-bottom-card-img3 '></div>
                            <div className='service-xidmet-qiymeti-bottom-card-text'>
                                <h4>Elektrik Təmiri</h4>
                                <p>Duis sapien nibh, heç kimdən ültricies, nə də rutrum.</p>
                            </div>
                            <h1 className='service-xidmet-qiymeti-bottom-card-numer'>$150</h1>

                        </div>
                        <div className='service-xidmet-qiymeti-bottom-card'>
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