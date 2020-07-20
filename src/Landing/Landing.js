import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../Chart/Chart'
import './Landing.css'

function Landing() {
  return (
      <div className='LandingPage'>
        <div className='Landing-text'>
          <div className='landing-image'>
            <img src='../Resources/Voting-Illustration.png' alt='voting-illustration' />
          </div>
          <div className='landing-info'>
            <h2>GET INFORMED</h2>
            <Link to='/get-informed'>
              <button type='button' className='start-button'>
                Start Here
              </button>
            </Link>
          </div>
        </div>
        
        <div className='Chart'>
          <Chart />
        </div>

        <div className='movement-info'>
          <h2>Start a movement</h2>
          <button>Get Involved</button>
          <img src='../Resources/Problem-solving.png' alt='problem-solving'></img>
        </div>
      </div>
  )
  
}

export default Landing