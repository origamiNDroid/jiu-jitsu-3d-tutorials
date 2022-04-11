import React from 'react'
import '../assets/css/signin-style.css'
import Login from '../components/Login'
import LoginPanel from '../components/LoginPanel'

function Signin() {
  return (
    <div>
      <LoginPanel />
      <Login />
    </div>
  )
}

export default Signin