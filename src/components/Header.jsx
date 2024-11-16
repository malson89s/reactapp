import React, { useEffect, useState } from 'react'
import Logotype from '../assets/images project/logo.svg' 
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
      const storedThemeMode = localStorage.getItem('themeMode')

      if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          setIsDarkMode(true)
          document.documentElement.classList.add('dark')

      } else {
        setIsDarkMode(false)
        document.documentElement.classList.remove('dark')
      }

  }, [])

  const handleThemeToggle = () => {
      if (isDarkMode) {
          setIsDarkMode(false)
          localStorage.setItem('themeMode', 'light')
          document.documentElement.classList.remove('dark')
      } else {
        setIsDarkMode(true)
        localStorage.setItem('themeMode', 'dark')
        document.documentElement.classList.add('dark')

      }
  }

  return (
  <header>
  <div className="container-nav">
 
    <Link id="logo" to ="/">
      <img src={Logotype} alt="Silicon Logotype" />
     </Link>

    <nav id="main-menu" className="navbar" aria-label="main navigation">
      <NavLink className="nav-link" to="/features">Features</NavLink>
      <NavLink className="nav-link" to="/contact">Contact</NavLink>
    </nav>

      <div id="darkmode-toggle-switch" className="btn-toggle-switch">
        <span className="label">Dark mode</span>
        <label htmlFor="darkmode-switch" className="toggle-switch">
          <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={handleThemeToggle} />
            <span className="slider round"></span>
        </label>
      </div>

      <nav id="auth-signin" href="#" className="btn-primary">
        <i className="fa-thin fa-user-large"></i>
        <NavLink className="nav-link" to="/SignIn">Sign in/up</NavLink>
      </nav>

    <button className="btn-mobile">
      <i className="fa-regular fa-bars"></i>
    </button>
      

  </div>

  </header>
    
  )
}

export default Header