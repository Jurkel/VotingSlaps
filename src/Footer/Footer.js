import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
      <Link to='/register'>
          <button type='button' className='register-button'>
            Register to Vote!
          </button>
        </Link>
    </div>
  )
}

export default Footer