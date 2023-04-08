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
    <h6 data-aos="fade-right">Bizim xidmətlə</h6>
    <h1 data-aos="fade-left" >Hər Növ Təmir Xidməti Göstərilir</h1>
    <p data-aos="fade-right" >Ağrıma heyfslənirəm, amma elitamı itirdiyimə görə çox üzülürəm.</p>
    </div>
    <div className=' home-xidmet-card-container'>
      <div className='home-xidmet-card-container-top'>
        {HomexidmetJson.map(melumats=>(

              <HomexidmetCard sekil={melumats.img} h1={melumats.h1}/>
        ))}

      </div>
      <div className='home-xidmet-card-container-bottom'>
      {HomexidmetJson2.map(melumatlar=>(

           <HomexidmetCard sekil={melumatlar.img} h1={melumatlar.h1}/>
          ))}
      </div>

    </div>

   
   </div>
   </>
  )
}

export default Homexidmet