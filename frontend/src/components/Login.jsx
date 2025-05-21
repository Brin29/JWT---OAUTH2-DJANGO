import React from "react";

const Login = () => {
  return (
    <>
    <div>
      <h2>Create Account</h2>
      <form>
        <div>
          <label>Email Address</label>
          <input 
            type="text" 
            className="email-form"
            name="email"
          />
        </div>

        <div>
          <label>Password</label>
          <input 
            type="password" 
            className="email-form"
            name="password"
            />
        </div>
        <input type="submit" value="Submit" className="submitButton"/>
      </form>
    </div>
    </>
  )
}

export default Login