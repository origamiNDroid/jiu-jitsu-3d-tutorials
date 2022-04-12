import React from 'react'
import {Helmet} from 'react-helmet'

function Profile() {
  return (
    <div>
      <Helmet>
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700' />
        <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
        <link id="pagestyle" href="../assets/css/profile-styles.css" rel="stylesheet" />

      </Helmet>
    </div>
  )
}

export default Profile