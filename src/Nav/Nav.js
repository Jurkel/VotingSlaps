import React from 'react'
import { NavLink } from 'react-router-dom'
// import Home from '../Home/Home'
// import GetInformed from '../Get-Informed/Get-Informed'
// import HowToVote from '../How-To-Vote/How-To-Vote'
// import Register from '../Register/Register'
import './Nav.css'

function Nav() {
  return (
    <div>
    <nav class='Nav-Bar'>
        
          <img class='Logo-Image' src='../Resources/Logo.png' alt='votingslaps-logo'></img>
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