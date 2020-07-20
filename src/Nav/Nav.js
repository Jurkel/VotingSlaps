import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Resources/Logo.png'
import './Nav.css'

function Nav() {
  return (
    <div>
    <nav className='Nav-Bar'>
        
          <img className='Logo-Image' src={logo} alt='votingslaps-logo'></img>
            <ul>
              <li>
                <NavLink 
                  exact to='/' 
                  style={{ 
                    fontWeight: 'bold', 
                    color: 'black', 
                    textDecoration: 'none' 
                  }}
                  activeStyle={{
                    textDecoration: 'underline'
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/get-informed' 
                  style={{ 
                    fontWeight: 'bold', 
                    color: 'black', 
                    textDecoration: 'none' 
                  }}
                  activeStyle={{
                    textDecoration: 'underline'
                  }}
                >
                  GET INFORMED
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/get-involved'
                  style={{ 
                    fontWeight: 'bold', 
                    color: 'black', 
                    textDecoration: 'none' 
                  }}
                  activeStyle={{
                    textDecoration: 'underline'
                  }}
                >
                  GET INVOLVED
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/register'  
                  style={{ 
                    fontWeight: 'bold', 
                    color: 'black', 
                    textDecoration: 'none' 
                  }}
                  activeStyle={{
                    textDecoration: 'underline'
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