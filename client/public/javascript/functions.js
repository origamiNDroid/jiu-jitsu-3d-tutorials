console.log("importing functions");

function storeToken ( tok )
{
    try
    {
        localStorage.setItem('token_data', tok.accessToken);
    }
    catch(e)
    {
        console.log(e.message);
    }
}

function retrieveToken()
{
    var ud;
    try
    {
        ud = localStorage.getItem('token_data');
    }
    catch(e)
    {
        console.log(e.message);
    }
    return ud;
}
async function Login(){

    var loginName;
    var loginPassword;

	loginName = document.getElementById("username").value;
	loginPassword = document.getElementById("password").value;

	let data = {login:loginName,password:loginPassword};
	// let js = JSON.stringify(obj);

	try
	{
		const response = fetch('/api/login',
		{
			method:'POST',
			body:JSON.stringify({
				login: loginName,
				password: loginPassword,
			}),
			headers:{'Content-Type': 'application/json','Accept': 'application/json'}
		})
		.then(response => response.text())
		.then((response) =>{

			// JWT
			// storeToken(response);
			console.log(storeToken(data));
			// var ud = jwt.decode(retrieveToken(),{complete:true});
            // var loginName = ud.payload.loginName;
            // var loginPassword = ud.payload.loginPassword;

			let accessToken = retrieveToken(data);
			console.log('token:', accessToken);

			var user = {login:loginName}
			console.log('success:', data);
			localStorage.setItem('user data', JSON.stringify(user));
			// window.location.href = '/home';
		})
		.catch((err) => {
			console.error('Error: ', err);
		});

		return;
	}
	catch(error)
	{
		console.log(error);
		return;
		// console.log( e.toString());
		// return {status:400,error:e.toString()}
	}


};

async function createAccount(){

    var loginName;
    var loginPassword;
	var email;

	loginName = document.getElementById("username").value;
	email = document.getElementById("email").value;
	loginPassword = document.getElementById("password").value;

	let data = {login:loginName,email:email,password:loginPassword};
	// let js = JSON.stringify(obj);

try
{
	const response = fetch('/api/addUser',
	{
		method:'POST',
		body:JSON.stringify({
			login: loginName,
			email: email,
			password: loginPassword,
		}),
		headers:{'Content-Type': 'application/json','Accept': 'application/json'}
	})
	.then(response => response.text())
	.then((response) =>{
		console.log('success:', data);
	})
	.catch((err) => {
		console.error('Error: ', err);
	});
}
catch(error)
{
	console.log(error);

}


};
export {storeToken, retrieveToken, Login, createAccount};

// module.exports.Login = Login;
