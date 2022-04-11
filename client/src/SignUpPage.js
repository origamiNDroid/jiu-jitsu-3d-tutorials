import React from 'react'
import '../assets/css/signin-style.css'
import Signup from '../components/Signup'
import SignupPanel from '../components/SignupPanel'

function SignUpPage() {
  return (
    <div>
      <SignupPanel />
      <Signup />
    </div>
  )
}

export default SignUpPage