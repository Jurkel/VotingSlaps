import React from 'react'
// import { NavLink } from 'react-router-dom'
import logo from '../Resources/Logo.png'
import { slide as Menu } from 'react-burger-menu'
import './Nav.css'

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
      <nav className='Nav-Bar'>
          
            <img className='Logo-Image' src={logo} alt='votingslaps-logo'></img>
            <Menu right>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="get-informed" className="menu-item" href="/get-informed">Get Informed</a>
              <a id="get-involved" className="menu-item" href="/get-involved">Get Involved</a>
              <a id="register" className="menu-item" href="/register">Register</a>
            </Menu>
              {/* <ul className='nav-links'>
                <li>
                  <NavLink 
                    exact to='/' 
                    style={{ 
                      color: 'black', 
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to='/get-informed' 
                    style={{ 
                      color: 'black', 
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}
                  >
                    GET INFORMED
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to='/get-involved'
                    style={{ 
                      color: 'black', 
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}
                  >
                    GET INVOLVED
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to='/register'  
                    style={{ 
                      color: 'black', 
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}
                  >
                    REGISTER
                  </NavLink>
                </li>
              </ul> */}
              </nav>
            
              
            
          </div>
          
      
    )

  }
}

export default Nav