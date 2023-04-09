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
        {HomexidmetJson.map(melumatlar1=>(

              <HomexidmetCard key={melumatlar1.id} sekil={melumatlar1.img} h1={melumatlar1.h1}/>
        ))}

      </div>
      <div className='home-xidmet-card-container-bottom'>
      {HomexidmetJson2.map(melumatlar=>(

           <HomexidmetCard key={melumatlar.id} sekil={melumatlar.img} h1={melumatlar.h1}/>
          ))}
      </div>

    </div>

   
   </div>
   </>
  )
}

export default Homexidmet