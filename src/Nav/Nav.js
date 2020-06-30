import React from 'react'
import { Router, NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav class='Nav-Bar'>
      <Router>
        <div>
          <img class='Logo-Image' src='../Resources/Logo.png' alt='votingslaps-logo'></img>
            <ul>
              <li>
                <NavLink exact to='/'>HOME</NavLink>
              </li>
              <li>
                <NavLink to='/get-informed'>GET INFORMED</NavLink>
              </li>
              <li>
                <NavLink to='/how-to-vote'>HOW TO VOTE</NavLink>
              </li>
              <li>
                <NavLink to='/register'>REGISTER</NavLink>
              </li>
            </ul>
        </div>
      </Router>
    </nav>
  )
}

export default Nav