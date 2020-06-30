import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import App from '../App/App'
import GetInformed from '../Get-Informed/Get-Informed'
import HowToVote from '../How-To-Vote/How-To-Vote'
import Register from '../Register/Register'
import './Nav.css'

function Nav() {
  return (
    <nav class='Nav-Bar'>
      <Router>
        <div>
          <img class='Logo-Image' src='/Resources/Logo.png' alt='votingslaps-logo'></img>
            <ul>
              <li>
                <Link to='/'>HOME</Link>
              </li>
              <li>
                <Link to='/get-informed'>GET INFORMED</Link>
              </li>
              <li>
                <Link to='/how-to-vote'>HOW TO VOTE</Link>
              </li>
              <li>
                <Link to='/register'>REGISTER</Link>
              </li>
            </ul>

            <Switch>
              <Route path='/'>
                <App/>
              </Route>
              <Route path='/get-informed'>
                <GetInformed/>
              </Route>
              <Route path='/how-to-vote'>
                <HowToVote/>
              </Route>
              <Route path='/register'>
                <Register/>
              </Route>

            </Switch>
        </div>
      </Router>
    </nav>
  )
}

export default Nav;