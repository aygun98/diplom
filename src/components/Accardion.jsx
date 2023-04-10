import React, { useState } from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md'
import {MdKeyboardArrowUp} from 'react-icons/md'

import './css/Accardion.css'

const Accordion = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    < > 
    
    <div className="accordion-item" data-aos="fade-left" data-aos-duration="500">
      <div className="accordion-title" onClick={() => setIsActive1(!isActive1)}>
      <h1>
Hansı xidmət növlərini təqdim edirsiniz?</h1>
        <div>{isActive1 ? <MdKeyboardArrowUp className='acardion-icon'/> : <MdKeyboardArrowDown className='acardion-icon'/>}</div>
      </div>
      {isActive1 &&  <p className="accordion-content">Çox uzaqlarda, söz dağlarının arxasında, Vokalia və Consonantia ölkələrindən uzaqlarda, kor mətnlər yaşayır. Ayrılaraq sahildəki Bookmarksgrove-da yaşayırlar</p>}
    </div>
    <div className="accordion-item" data-aos="fade-left" data-aos-duration="500">
      <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>
        <h1>Qaydalarınız və şərtləriniz nədir?</h1>
        <div>{isActive2 ? <MdKeyboardArrowUp className='acardion-icon'/> :  <MdKeyboardArrowDown className='acardion-icon'/>}</div>
      </div>
      {isActive2 && <p className="accordion-content">Çox uzaqlarda, söz dağlarının arxasında, Vokalia və Consonantia ölkələrindən uzaqlarda, kor mətnlər yaşayır. Ayrılaraq sahildəki Bookmarksgrove-da yaşayırlar</p>}
    </div>
    <div className="accordion-item" data-aos="fade-left" data-aos-duration="500">
      <div className="accordion-title" onClick={() => setIsActive3(!isActive3)}>
        <h1>Layihəni başa çatdırmaq nə qədər vaxt aparacaq?</h1>
        <div>{isActive3 ? <MdKeyboardArrowUp className='acardion-icon'/> :  <MdKeyboardArrowDown className='acardion-icon'/>}</div>

      </div>
      {isActive3 && <p className="accordion-content">Çox uzaqlarda, söz dağlarının arxasında, Vokalia və Consonantia ölkələrindən uzaqlarda, kor mətnlər yaşayır. Ayrılaraq sahildəki Bookmarksgrove-da yaşayırlar</p>}
    </div>
   
    </>
  );
};

export default Accordion;