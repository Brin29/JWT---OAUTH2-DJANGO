import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance"
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [email, setEmail] = useState(" ")

  const hanldeSubmit = async e => {
    e.preventDefault()
    if (email) {
      const res = await axiosInstance.post("/auth/password-reset/", {
        "email": email
      })
      if (res.status === 200){
        console.log(res)
        toast.success("a link to reset yout password has be sent to your email")
      }
      setEmail("")
    }
  }

  return (
    <>
      <h2>Enter yout register Email Address</h2>
      <div>
        <form onSubmit={hanldeSubmit}>
          <div>
            <label>Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}/>
          </div>

          <button>Send</button>
        </form>
      </div>
    </>
  )
}

export default ForgetPassword