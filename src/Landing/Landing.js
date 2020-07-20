import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../Chart/Chart'
import './Landing.css'
import problemSolving from '../Resources/Problem-solving.png'
import votingIllustration from '../Resources/Voting-Illustration.png'

function Landing() {
  return (
      <div className='LandingPage'>
        <div className='Landing-text'>
          <div className='landing-image'>
            <img 
              className='voting-image' 
              src={votingIllustration} 
              alt='voting-illustration' />
          </div>
          <div className='landing-info'>
            <h2>GET <br/> INFORMED</h2>
            
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
          <br/>
          <img 
            className='problem-solving' 
            src={problemSolving} 
            alt='problem-solving'/>
          
          
        </div>
      </div>
  )
  
}

export default Landing