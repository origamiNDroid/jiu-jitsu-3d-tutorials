import React, { useState } from 'react'
import axios from 'axios'
import { json } from 'body-parser'
import { Link } from 'react-router-dom'

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';

import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';

function Signup() {

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');

    const [regUsername, setRegUsername] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');

    const [message, setMessage] = useState('');
    const doRegister = async event =>
    {
        event.preventDefault();

        var obj = {login:regUsername.value, password:regPassword.value, email: regEmail.value};
        var js = JSON.stringy(obj);

        var config =
        {
            method: 'post',
            url: bp.buildPath('api/addUser'),
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
                if (res.error)
                {
                    setMessage('ERROR');
                }
                else
                {
                    storage.storeToken(res);
                    var jwt = require('jsonwebtoken');

                    var ud = jwt.decode(storage.retrieveToken(), {complete:true});
                    var userId = ud.payload.userId;
                    var username = ud.payload.username;
                    var password = ud.payload.password;
                    var email = ud.payload.email;

                    var user = {login: username, password:password, id:userId, email:email};

                    localStorage.setItem('user data', JSON.stringify(user));
                    window.location.href = '/users';
                }
        })
        .catch(function (error)
        {
            console.log(error);
        });
    };

  return (
    <div id='registerDiv'>
        <form className='sign-in-form' onSubmit={doRegister}>
            <h2 className='title'>Sign Up</h2>
            <div className='input-field'>
                <PersonIcon />
                <input type='text' placeholder='Username' id='regUsername' 
                    onChange={(e) =>
                    {
                        setRegUsername(e.target.value);
                    }}/>
            </div>

            < br />

            <div className='input-field'>
                <EmailIcon className='fas'/>
                <input type='email' placeholder='email' id='regEmail' 
                    onChange={(e) =>
                    {
                        setRegEmail(e.target.value);
                    }}/>
            </div>

            <br />

            <div className='input-field'>
                <LockIcon className='fas'/>
                <input type='password' placeholder='Password' id='regPassword' 
                    onChange={(e) =>
                    {
                        setRegPassword(e.target.value);
                    }}/>
            </div>

            <input type='submit' id='regButton' className='btn solid' value='Sign Up'
            onClick={doRegister} />

            <p className='social-text'> <br /> <br /> Sign in with social platforms</p>
            <div className='social-media'>
                <Link to={'/signup'} className='social-icon'>
                    <Facebook />
                </Link>
                <Link to={'/signup'} className='social-icon'>
                    <Twitter />
                </Link>
                <Link to={'/signup'} className='social-icon'>
                    <LinkedIn />
                </Link>
            </div>
        </form>
        
        <span id='registerResult'></span>
    </div>
  );
};

export default Signup;