import React, { useState } from 'react'
import './loginSignUp.css'

const LoginSignup = () => {
  const[state,setState]= useState("Login");

  const[formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  });

  const changeHangler =(e)=>{
      setFormData({...formData,[e.target.name]:[e.target.value]})
  }

  const login = async()=>{
  console.log("Login successful");
  }

  const signup = async()=>{
   console.log("Signup successful");
  }

  return (
    <div className="login">
      <div className="l-container">
        <h1>{state}</h1>
        <div className="l-fields">
          {state==="Sign up"?<input name="username" value={formData.username} onChange={changeHangler} type="text" placeholder='Your Name'/>:<></>}
          <input name="email" value={formData.email} onChange={changeHangler} type="email" placeholder='Email Address'/>
          <input name="password" value={formData.password} onChange={changeHangler} type="password" placeholder='Password'/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>

        {state==="Sign up"?
        <p className="l-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>:
        <p className="l-login">Create an account? <span onClick={()=>{setState("Sign up")}}>Sign up here</span></p>}
        
        <div className="l-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, I agree to the terms of use & private policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup