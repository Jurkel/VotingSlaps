import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (
      <div className='LandingPage'>
        <h2>GET INFORMED</h2>
        <Link to='/get-informed'>
          <button type='button' className='start-button'>
            Start Here
          </button>
        </Link>
        <div className='Chart'></div>
      </div>
    
  )
  
}

export default Landing