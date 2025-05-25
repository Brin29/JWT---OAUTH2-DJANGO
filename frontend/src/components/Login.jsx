import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate()
  const [logindData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { email, password } = logindData

  const  handleOnChange = e => {
    setLoginData({ ...logindData, [e.target.name]:e.target.value })
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    
    if (!email || !password ) {
      setError("email and password are required")
    }
    else {
      setIsLoading(true)
      const res = await axios.post("http://localhost:8000/api/v1/auth/login/", logindData)
      const response = res.data
      console.log(response)
      setIsLoading(false)
      const user = {
        "email": response.email,
        "names": response.full_name
      }
      if (res.status === 200){
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("access", JSON.stringify(response.access_token))
        localStorage.setItem("refresh", JSON.stringify(response.refresh_token))
        navigate("/profile")
        toast.success("login succesfull")
      }

    }
  }

  return (
    <>
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {isLoading && (
          <p>Loading...</p>
        )}
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
          <label>Password</label>
          <input 
            type="password" 
            className="email-form"
            name="password"
            value={password}
            onChange={handleOnChange}
            />
        </div>
        <input type="submit" value="Submit" className="submitButton"/>
      </form>
    </div>
    </>
  )
}

export default Login