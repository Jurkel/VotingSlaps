import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../Resources/Logo.png'

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      showRegisterButton: true
    }
  }

  hideButton = () => {
    this.setState({ showRegisterButton: !this.state.showRegisterButton });
  }

  renderButton = () => {
    return (window.location.pathname == '/register' ? 
      '' : 
      <button type='button' className='register-button' onClick={() => this.hideButton()}>
        Register
      </button> )
  }

  render() {
    return (
      <div className='Footer'>
        <Link to='/register'>
          <img className='footer-logo' src={logo} alt='votingslaps-logo'/>
          <br/>
          {this.renderButton()}
        </Link>
      </div>
    )
  }
}

export default Footer