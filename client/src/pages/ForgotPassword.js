import React, { useState } from 'react'
import axios from 'axios'

import styles from '../assets/css/forgotpassword-style.module.css'

import {RiMailFill} from 'react-icons/ri';

function ForgotPassword() {

    var bp = require('../components/Path.js');
    var storage = require('../tokenStorage.js');

    const [valEmail, setEmail] = useState('');

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
        <div className={styles.container}>
            <div className={styles.formsContainer}>
                <form className="forgot-password-form" onSubmit={resetPassword}>
                    <h2 className={styles.title}>Forgot Password</h2>
                    <div className={styles.inputField}>
                    <RiMailFill />
                    <input type="email" placeholder="Email" id='valEmail'
                        onChange={(e) =>
                        {
                            setEmail(e.target.value);
                        }}>
                            
                        </input>
                    </div>
                    <input type="submit" value="Reset" className={`${styles.btn} ${styles.solid}`} />
                </form>
            </div>
        </div>
    </>
    )
}

export default ForgotPassword