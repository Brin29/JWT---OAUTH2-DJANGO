import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Signup, Login, Profile, VerifyEmail, ForgetPassword } from './components'
import { ToastContainer } from "react-toastify";
import ResetPassword from './components/ResetPassword';

function App() {

  return (
    <>
      <Router>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'/>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/otp/verify' element={<VerifyEmail/>}/>
          <Route path='/forget_password' element={<ForgetPassword/>}/>
          <Route path='/password-reset-confirm/:uid/:token' element={<ResetPassword/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
