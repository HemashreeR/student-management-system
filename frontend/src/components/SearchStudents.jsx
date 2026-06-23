import React, { useContext, useRef, useState } from 'react'
import './SearchStudents.css'
import { send } from '../App'

const SearchStudents = () => {
  const [name,setname] = useState('')

  const {searchStu} = useContext(send)

  const clicked = ()=>{
    searchStu(name)
  }

  return (
    <div className='searchDiv'>
        <h2 className='searchHeading'>Search Student</h2>
        <div className="searchbarDiv">
            <input type="text" name="searchbar" id="searchbar" className="searchbar" placeholder='  Search with name or email' onChange={(e)=>setname(e.target.value)} />
            <button className='searchBtn' onClick={()=>clicked()}><i className=" fa-solid fa-magnifying-glass" ></i> Search</button>
        </div>
    </div>
  )
}

export default SearchStudents
