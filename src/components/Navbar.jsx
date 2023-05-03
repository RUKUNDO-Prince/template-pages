import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import App from '../App'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to='/home'>Home</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auhref">
              <li className="nav-item">
                <NavLink className="nav-link" >Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/signup'>Sign Up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
