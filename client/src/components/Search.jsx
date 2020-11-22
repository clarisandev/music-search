import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionSearch } from '../redux/actions/actions'
import Cards from './Cards'

const Search = () => {

  const [ search, setSearch ] = useState('')
  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleClick = () => {
    dispatch(actionSearch(search))
  }

  return (
    <div className="App">
      <input type='text' value={search} onChange={handleChange}/>
      <button onClick = {handleClick} >
        SEARCH
      </button>
      <Cards/>
    </div>
  );
}

export default Search;
