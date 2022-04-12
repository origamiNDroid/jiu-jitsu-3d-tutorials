import React from 'react'
import '../assets/css/signin-style.css'
import Signup from '../components/Signup'
import SignupPanel from '../components/SignupPanel'
import { Grid } from '@mui/material'

function SignUpPage() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Signup />

        </Grid>
  
        <Grid item xs={2}>
          <SignupPanel />
        </Grid>
      </Grid>
    </div>
  )
}

export default SignUpPage