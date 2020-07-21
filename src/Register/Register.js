import React from 'react'
import { Form } from 'react-formio'
import './Register.css'

function Register() {
  return (
    <div className='register-form'>
      <h2>Register</h2>
      <Form src="https://qshpuqquonmzkxm.form.io/votereligibility" />
    </div>
  )
}



export default Register