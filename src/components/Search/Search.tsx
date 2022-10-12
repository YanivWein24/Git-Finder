import React, {FC} from 'react'
import './Search.css'

const Search:FC = () => {
  return (
    <div className="search">
    <i className="fa-solid fa-magnifying-glass"></i>
    <input placeholder="Search Github Username...">
    </input>
    <button>Search</button>
    </div>
  )
}

export default Search