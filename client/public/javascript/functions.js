const axios = require('axios');

function Login()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');

    var loginName;
    var loginPassword;


    const doLogin = async event =>
    {
        event.preventDefault();

        var obj = {login:loginName.value,password:loginPassword.value};
        var js = JSON.stringify(obj);

        var config =
        {
            method: 'post',
            url: bp.buildPath('api/login'),
            headers:
            {
                'Content-Type': 'application/json'
            },
            data: js
        };

        axios(config)
            .then(function (response)
        {
            var res = response.data;
            if (res.error)
            {
                console.log(res.error)
            }
            else
            {
				console.log(res)
                // storage.storeToken(res);
                // var jwt = require('jsonwebtoken');
				//
                // var ud = jwt.decode(storage.retrieveToken(),{complete:true});
                // var userId = ud.payload.userId;
                // var firstName = ud.payload.firstName;
                // var lastName = ud.payload.lastName;
				//
                // var user = {firstName:firstName,lastName:lastName,id:userId}
                // localStorage.setItem('user_data', JSON.stringify(user));
                // window.location.href = '/cards';
            }
        })
        .catch(function (error)
        {
            console.log(error);
        });
    }

};

export default Login;
