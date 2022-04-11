import React, { useState } from 'react'
import axios from 'axios'

import styles from '../assets/css/forgotpassword-style.css'
import EmailIcon from '@mui/icons-material/Email';

function ForgotPassword() {

    var bp = require('../components/Path.js');
    var storage = require('../tokenStorage.js');

    var valEmail;

    const [message, setMessage] = useState('');
    const resetPassword = async event =>
    {
        event.preventDefault();

        var obj = {userEmail:valEmail};
        var js = JSON.stringify(obj);

        var config =
        {
            method: 'post',
            url: bp.buildPath('api/forgot'),
            headers:
            {
                'Content-Type' : 'application.json'
            },
            data: js
        };

        axios(config)
            .then(function (response)
            {
                var res = response.data;

                if(res.error)
                {
                    setMessage('ERROR');
                }
                else
                {
                    storage.storeToken(res);
                    var jwt = require('jsonwebtoken');

                    var ud = jwt.decode(storage.retrieveToken(), {complete: true});
                }
            })
    }
  return (
    <>
        <div className="container">
            <div className="forms-container">
                <form action="#" className="forgot-password-form" onSubmit={resetPassword}>
                    <h2 className="title">Forgot Password</h2>
                    <div className="input-field">
                    <EmailIcon fontSize='small' />
                    <input type="email" placeholder="Email" id='valEmail'/>
                    </div>
                    <input type="submit" value="Reset" className="btn solid" />
                </form>
            </div>
        </div>
    </>
    )
}

export default ForgotPassword