import { json } from 'body-parser';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/signin-style.module.css'

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Login()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');

    const [loginName, setLoginName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [message,setMessage] = useState('');
    
    const doLogin = async event =>
    {
        event.preventDefault();

        var obj = {login:loginName.value, password:loginPassword.value};
        var js = JSON.stringify(obj);

        var config =
        {
            method: 'post',
            url: bp.buildPath('api/login'),
            headers:
            {
                'Content-Type': 'application.json'
            },
            data: js
        };

        axios(config)
            .then(function (response)
            {
                var res = response.data;
                if(res.error)
                {
                    setMessage('User/Password combination incorrect');
                }
                else
                {
                    storage.storeToken(res);
                    var jwt = require('jsonwebtoken');

                    var ud = jwt.decode(storage.retrieveToken(), {complete:true});
                    var userId = ud.payload.userId;
                    var firstName = ud.payload.firstName;
                    var lastName = ud.payload.lastName;

                    var user = {firstName:firstName, lastName:lastName, id:userId}

                    localStorage.setItem('user data', JSON.stringify(user));
                    window.location.href = '/users';
                }
            })
            .catch(function (error)
            {
                console.log(error);
            });

    };

    return(
        <div id="loginDiv">
            <form className={styles.signInForm} onSubmit={doLogin}>
                <h2 className={styles.title}>Sign In</h2><br />
                <div className={styles.inputField}>
                    <PersonIcon fontSize='small'/>
                    <input type="text" id='loginName' placeholder='Username'
                        onChange={(e) =>
                        {
                            setLoginName(e.target.value);
                        }}/>
                </div>

                <br />

               <div className={styles.inputField}>
                   <LockIcon fontSize='small'/>
                   <input type='password' id='loginPassword' placeholder='Password'
                    onChange={(e) =>
                    {
                        setLoginPassword(e.target.value);
                    }}/>
               </div>
                <input type='submit' id='loginButton' className={`${styles.btn} ${styles.solid}`} value='Login'
                onClick={doLogin} />

                <p className={`${styles.socialText}`}> <br /> <br /> Sign in with social platforms</p>
                <div className={styles.socialMedia}>
                    <Link to={'/signin'} className={styles.socialIcon}>
                        <FacebookIcon fontSize='small'/>
                    </Link>
                    <Link to={'/signin'} className={styles.socialIcon}>
                        <TwitterIcon fontSize='small'/>
                    </Link>
                    <Link to={'/signin'} className={styles.socialIcon}>
                        <LinkedInIcon fontSize='small'/>
                    </Link>
                </div>
            </form>

            <span id='loginResult'></span>
        </div>
    );
};

export default Login;