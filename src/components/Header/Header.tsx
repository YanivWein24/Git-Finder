import React, {useEffect, useContext} from 'react'
import {ThemeContext} from '../../App'
import './Header.css'

const Header = () => {
  
  const {theme, setTheme} = useContext(ThemeContext)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
},[theme])

  return (
    <div className="header">
    <h2 className="brand">Git-Finder</h2>
    <div  className="themeSwitch"
      onClick={() => {theme === 'light' ? setTheme('dark') : setTheme('light')}}>
    <p>{theme} {theme === 'light' ? <i className="fa-regular fa-sun"></i> : <i className="fa-regular fa-moon"></i>}</p>
    </div>
    </div>
  )
}

export default Header