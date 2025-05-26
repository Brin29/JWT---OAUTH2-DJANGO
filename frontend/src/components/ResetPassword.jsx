import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance'
import { toast } from 'react-toastify'

const ResetPassword = () => {
  const navigate = useNavigate()
  const {uid, token} = useParams()
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirm_password: ""
  })

  const {password, confirm_password} = newPassword

  const handleChange = e => {
    setNewPassword({...newPassword, [e.target.name]:e.target.value})
  }

  const data = {
    'password': newPassword.password,
    'confirm_password': newPassword.confirm_password,
    'uidb64': uid,
    'token': token
  }

  const handleSubmit = async  e => {
    e.preventDefault()
    const response = await axiosInstance.patch('/auth/set-new-password/', data)
    const result = response.data
    if (response.status == 200){
      navigate('/login')
      toast.success(result.message)
    }
  }

  return (
    <>
      <h2>ResetPassword</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Password:</label>
          <input 
            type="password"
            name='password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input 
            type="password"
            name='confirm_password'
            value={confirm_password}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
    
  )
}

export default ResetPassword