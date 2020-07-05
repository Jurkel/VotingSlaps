import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (
      <div class='LandingPage'>
        <h2>GET INFORMED</h2>
        <Link to='/get-informed'>
          <button type='button' class='start-button'>
            Start Here
          </button>
        </Link>
        <div class='Chart'></div>
      </div>
    
  )
  
}

export default Landing