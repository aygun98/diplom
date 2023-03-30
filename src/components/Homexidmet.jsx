import React from 'react'
import  './css/Homexidmet.css'
import HomexidmetCard from './HomexidmetCard'
import HomexidmetJson from '../Homexidmet.json'
import HomexidmetJson2 from '../Homexidmet2.json'

const Homexidmet = () => {
  return (
   <>
   <div className='home-xidmet'>
   <div className='home-xidmet-text'> 
    <h6 data-aos="fade-right" data-aos-delay="300">Bizim xidmətlə</h6>
    <h1 data-aos="fade-left" data-aos-delay="500">Hər Növ Təmir Xidməti Göstərilir</h1>
    <p data-aos="fade-right" data-aos-delay="600">Ağrıma heyfslənirəm, amma elitamı itirdiyimə görə çox üzülürəm.</p>
    </div>
    <div className=' home-xidmet-card-container'>
      <div className='home-xidmet-card-container-top'>
        {HomexidmetJson.map(melumat=>(

              <HomexidmetCard sekil={melumat.img} h1={melumat.h1}/>
        ))}

      </div>
      <div className='home-xidmet-card-container-bottom'>
      {HomexidmetJson2.map(melumat=>(

           <HomexidmetCard sekil={melumat.img} h1={melumat.h1}/>
          ))}
      </div>

    </div>

   
   </div>
   </>
  )
}

export default Homexidmet