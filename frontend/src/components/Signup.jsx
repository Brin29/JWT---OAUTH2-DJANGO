import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: ""
  })

  const [error, setError] = useState("")

  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]:e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if ( !email || !first_name || !last_name || !password || !password2) {
      setError("all fields are required")
    }
    else {
      const res = await axios.post("http://localhost:8000/api/v1/auth/register/", formData)
      const response = res.data
      console.log(response)
      if (res.status === 201 ){
      // redirect to verifyemail component
      navigate("/otp/verify")
      toast.success(response.message)
     }
    }

  }

  const {email, first_name, last_name, password, password2} = formData;

  return (
    <>
      <>
        <>
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
          <p>{error ? error : ""}</p>
            <div>
              <label>Email Address</label>
              <input
                type="text" 
                className="email-form"
                name="email"
                value={email}
                onChange={handleOnChange}
                />
            </div>
            
            <div>
              <label>First Name</label>
              <input
                type="text" 
                className="email-form"
                name="first_name"
                value={first_name}
                onChange={handleOnChange}
                />
            </div>

            <div>
              <label>Last Name</label>
              <input
                type="text" 
                className="email-form"
                name="last_name"
                value={last_name}
                onChange={handleOnChange}
                />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password" 
                className="email-form"
                name="password"
                value={password}
                onChange={handleOnChange}
                />
            </div>
            
            <div>
              <label>Confirm Password</label>
              <input
                type="password" 
                className="email-form"
                name="password2"
                value={password2}
                onChange={handleOnChange}
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