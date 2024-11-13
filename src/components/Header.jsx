import React from 'react'
import Logotype from '../assets/images project/logo.svg' 
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
  <header>
  <div className="container">
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
          <input id="darkmode-switch" type="checkbox" />
            <span className="slider round"></span>
        </label>
      </div>
      <a id="auth-signin" href="#" className="btn-primary">
        <i className="fa-thin fa-user-large"></i>
        <span>Sign in / up</span>
      </a>

    <button className="btn-mobile">
      <i className="fa-regular fa-bars"></i>
    </button>
      

  </div>

  </header>
    
  )
}

export default Header