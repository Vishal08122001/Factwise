import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'

const SearchBox = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState('')
  
  const handleChange=(e)=>{
    const value = e.target.value
    setSearchValue(value)
    onSearch(value)
  }
  
  return (
    <div className='d-flex'>
      <div className='position-relative w-100'>
        <BsSearch className='position-absolute top-50 translate-middle-y text-muted' style={{ right: '40px' }}/>
        <input
        type='text'
        value={searchValue}
        onChange={handleChange}
        placeholder='Search user'
        className='m-4  border rounded p-2 text-muted'
        style={{outline:"none", width:"93.5%"}}
      />
      </div>
    </div>
  )
}

export default SearchBox
