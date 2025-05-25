import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))
  const jwt_access = localStorage.getItem("access")

  useEffect(() => {
    if (jwt_access === null && !user){
      navigate("/login")
    }
  })

  return (
    <>
      <h2>Hi {user && user.names}</h2>
      <p>Welcome to your profile</p>
      <button>Logout</button>
    </>
  )
}

export default Profile