import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import './css/Canvars.css'

const Canvas = () => {

   
        const [percentage, setPercentage] = useState(0);

     
        useEffect(() => {
          setTimeout(() => {
            if (percentage < 86) {
              setPercentage(percentage + 1);
            }
          }, 100);
        }, [percentage]);
    

    
  return (
   <>
  <div style={{textAlign:"center"}} >
      
      <div style={{ width: 150, marginLeft: 550}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
   
   </>
  )
}

export default Canvas