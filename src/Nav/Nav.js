import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Resources/Logo.png'
import './Nav.css'

function Nav() {

  return (
    <div>
    <nav className='Nav-Bar'>
        
          <img className='Logo-Image' src={logo} alt='votingslaps-logo'></img>
            <div className='hamburger'>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
            </div>
            <ul className='nav-links'>
              <li>
                <NavLink 
                  exact to='/' 
                  style={{ 
                    color: 'black', 
                    textDecoration: 'none',
                    fontSize: '12px'
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
                    fontSize: '12px'
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
                    fontSize: '12px'
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
                    fontSize: '12px'
                  }}
                >
                  REGISTER
                </NavLink>
              </li>
            </ul>
            </nav>
          
            
          
        </div>
        
    
  )

}

export default Nav