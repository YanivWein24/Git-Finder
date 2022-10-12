import React, {FC} from 'react'
import './Header.css'

const Header:FC = () => {
  return (
    <div className="header">
    <h2 className="brand">Git-Finder</h2>
    <p>LIGHT <i className="fa-regular fa-sun"></i></p>
    </div>
  )
}

export default Header