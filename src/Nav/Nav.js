import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import GetInformed from '../Get-Informed/Get-Informed'
import HowToVote from '../How-To-Vote/How-To-Vote'
import Register from '../Register/Register'
import './Nav.css'

function Nav() {
  return (
    <nav class='Nav-Bar'>
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

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/get-informed' component={GetInformed} />
            <Route path='/how-to-vote' component={HowToVote} />
            <Route path='/register' component={Register} />
          </Switch>
        </div>
    </nav>
  )
}

export default Nav