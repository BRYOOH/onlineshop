import React from 'react'
import './loginSignUp.css'

const LoginSignup = () => {
  return (
    <div className="login">
      <div className="l-container">
        <h1>Sign Up</h1>
        <div className="l-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="l-login">Already have an account? <span>Login Here</span></p>
        <div className="l-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, I agree to the terms of use & private policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup