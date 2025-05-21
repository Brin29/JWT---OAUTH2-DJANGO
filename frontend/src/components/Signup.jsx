import React from "react";

const Signup = () => {
  return (
    <>
      <>
        <>
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
              <label>First Name</label>
              <input 
                type="text" 
                className="email-form"
                name="first_name"
                />
            </div>

            <div>
              <label>Last Name</label>
              <input 
                type="text" 
                className="email-form"
                name="last_name"
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
            
            <div>
              <label>Confirm Password</label>
              <input 
                type="password" 
                className="email-form"
                name="confirm-password"
                />
            </div>

            <input type="submit" value="Submit" className="submitButton"/>
          </form>
          <h3>Or</h3>
          <div>
            <button>Sign up with Github</button>
          </div>
          <div>
            <button>Sign up with Google</button>
          </div>
          <div>
            <button>Sign up with Facebook</button>
          </div>
        </>
      </>
    </>
  )
}

export default Signup