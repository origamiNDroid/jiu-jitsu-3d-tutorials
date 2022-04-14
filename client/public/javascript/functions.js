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
		console.log('success:', data);
	})
	.catch((err) => {
		console.error('Error: ', err);
	});
	 // console.log(response.status);
	// let r = await response.json();
	// console.log(r);
	// let res = JSON.parse(r);
	// console.log(res);
	// return {};
	// let res = JSON.parse(await response.text());
	//
    // return {status:response.status,res:res};
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


// module.exports.Login = Login;
