async function Login(){

    var loginName;
    var loginPassword;

	loginName = document.getElementById("username").value;
	loginPassword = document.getElementById("password").value;

	let obj = {login:loginName,password:loginPassword};
	let js = JSON.stringify(obj);

try
{
	const response = await fetch('http://jiu-jitsu-3d-tutorials.herokuapp.com/api/login',
	{
		method:'POST',
		body:js,
		headers:{'Content-Type': 'application/json','Accept': 'application/json'}
	});
	let r = await response.text();
	console.log(r);
	let res = JSON.parse(r);
	console.log(res);
	return {};
}
catch(e)
{
	console.log( e.toString());
	return {status:400,error:e.toString()}
}

    /*const doLogin = async event =>
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
    }*/

};

// module.exports.Login = Login;
