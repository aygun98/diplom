import React, { useState } from 'react';

import './css/Accardion.css'

const Accordion = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <div className='about-acardion-container'> 
    
    <div className="acardion-div">
      <div className="accordion-title" onClick={() => setIsActive1(!isActive1)}>
      <h1>Unudulmaz Təcrübə</h1>
        {/* <div>{isActive1 ? '-' : '+'}</div> */}
      </div>
      {isActive1 &&  <div class="panel"> <p>Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi.Müştəri çox önəmlidir, müştərini müştəri izləyəcək. İndi o, sonda idi. </p>
                </div>}
    </div>
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>
        <div>Basliq</div>
        {/* <div>{isActive2 ? '-' : '+'}</div> */}
      </div>
      {isActive2 && <div className="accordion-content">mezmun</div>}
    </div>
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive3(!isActive3)}>
        <div>Basliq</div>
        {/* <div>{isActive3 ? '-' : '+'}</div> */}

      </div>
      {isActive3 && <div className="accordion-content">mezmun</div>}
    </div>
   
    </div>
  );
};

export default Accordion;