import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import './css/Canvars.css'

const Canvas = ({faiz}) => {

   
        const [percentage, setPercentage] = useState(0);

     
        useEffect(() => {
          setTimeout(() => {
            if (percentage < faiz) {
              setPercentage(percentage + 1);
            }
          }, 100);
        }, [percentage]);
    

    
  return (
   <>
  <div className='canvas-conatainer' style={{textAlign:"center"}}  data-aos="fade-up">
      
      <div style={{ width: 200}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
   
   </>
  )
}

export default Canvas