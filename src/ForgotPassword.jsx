import React from 'react'
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
    <div className="login-form-container">
      <h1 >Forgot Password</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:  </label>
          <input 
            type="email"
            placeholder='Enter Email'
            required
           
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Reset Password:</label>
          <input style={{marginLeft:"5px"}}
            type="password"
            placeholder='Enter New Password'
            required
            
           
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
      
      <Link to="/">Login Page?</Link>
    </div>
      
    </div>
    
  </>
  )
}

export default ForgotPassword