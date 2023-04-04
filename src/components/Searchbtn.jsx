import React, {useState, useRef} from 'react'
import './css/Searchbtn.css'
import {BiSearchAlt} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Searchbtn = ({placeholders, datalar}) => {
 const [filteredData, setFilteredData] =useState([])
 const [wordEntered, setWordEntered] =useState("")
   const handleFilter = (event)  =>{
     const searchWord = event.target.value
     setWordEntered(searchWord);
     const newFilter = datalar.filter((value)=>{
        return value.write.toLowerCase().includes(searchWord.toLowerCase())

     })
     if(searchWord === ""){
        setFilteredData([])
     } else{ 

         setFilteredData(newFilter)    
     }
   }
   const clearInput = ()=>{
    setFilteredData([]);
    setWordEntered("")
   }
   //
 const inputs = useRef()
 const inputActiv = (e)=>{
    const klikle = e.target
    if(klikle.classList.contains('search-icon')){
   inputs.current.classList.toggle('searchInputs-activ')
    }
 }


 return (
    <div className='search'>
        <div className='searchInputs' ref={inputs}>
            <input type="text" placeholder={placeholders} value={wordEntered} onChange={handleFilter} />
            <div className="searchIcon">
                {filteredData.length === 0 ? <BiSearchAlt onClick={inputActiv} className='search-icon'/> : <RxCross2 className='clearBtn' id='clearBtn' onClick={clearInput}/>}</div>
        </div>
        {filteredData.length != 0 && 
        <div className='dataResult'>
            {
                filteredData.slice(0, 15).map((value, key) =>{
                    return  <Link  to={value.to} className="dataItem"> 
                   <p> {value.write}</p>
                    </Link>
                })
            }
        </div>
}
    </div>
  )
}

export default Searchbtn