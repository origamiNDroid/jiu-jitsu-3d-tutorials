import React from 'react'
import '../assets/css/signin-style.css'
import Login from '../components/Login'
import LoginPanel from '../components/LoginPanel'

import { Grid } from '@mui/material'

function Signin() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>

          <Login />
        </Grid>
        <Grid item xs={2}>
          <LoginPanel />

        </Grid>
      </Grid>
    </div>
  )
}

export default Signin;
