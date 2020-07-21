import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../Resources/Logo.png'

function Footer() {
  return (
    <div className='Footer'>
      <Link to='/register'>
        <img className='footer-logo' src={logo} alt='votingslaps-logo'/>
        <br/>
        <button type='button' className='register-button'>
          Register
        </button>
      </Link>
    </div>
  )
}

export default Footer