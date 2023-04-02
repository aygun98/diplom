import React from 'react'
import './css/NavModulForm.css'
import {RxCrossCircled} from 'react-icons/rx'


const NavModulForm = ({closeModalForm}) => {
  return (
    <div className='nav-form-container'>
        <RxCrossCircled onClick={()=> closeModalForm(false)}/>
    <form action="" className='nav-form'> 
     
        
          <input type="text" class="form-control" placeholder="Ad" aria-label="First name" />
       
      
          <input type="text" class="form-control" placeholder="Soyad" aria-label="Last name" />
       
          <input type="email" class="form-control" id="inputEmail4" placeholder='Email' />
        <div class="nav-select">
          <select id="inputState" class="form-select">
            <option selected>Həftə içi...</option>
            <option>Bazar ertəsi</option>
            <option>Çərşənbə axsamı</option>
            <option>Çərşənbə</option>
            <option>Cümə axşamı</option>
            <option>Cümə</option>
           
          </select>
          <select id="inputState" class="form-select">
            <option selected>Saat...</option>
            <option>12:30</option>
            <option>13:00</option>
            <option>13:30</option>
            <option>14:00</option>
            <option>14:30</option>
           
          </select>

        </div>
        
          
         
        <button className='nav-form-btn'>Göndər</button>
      



    </form>
  </div>
  )
}

export default NavModulForm