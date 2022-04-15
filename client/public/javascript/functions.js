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
		const response = await fetch('/api/login',
		{
			method:'POST',
			body:JSON.stringify({
				login: loginName,
				password: loginPassword,
			}),
			headers:{'Content-Type': 'application/json','Accept': 'application/json'}
		});
		// .then(response => response.text())
		// .then((response) =>{
		if (response.status == 200) {
            const data = await response.json();
			console.log(data);
            localStorage.setItem('token', data.accessToken);
			localStorage.setItem('id', data.id);
			const parsed = parseJwt(data.accessToken);
			console.log(parsed);
        } else {
            // Show an error
			console.log('fail')
        }
			// JWT
			// storeToken(response);
			// console.log(storeToken(data));
			// // var ud = jwt.decode(retrieveToken(),{complete:true});
            // // var loginName = ud.payload.loginName;
            // // var loginPassword = ud.payload.loginPassword;
			//
			// let accessToken = retrieveToken(data);
			// console.log('token:', data.token);
			//
			// var user = {login:loginName}
			// console.log('success:', data);
			// localStorage.setItem('user data', JSON.stringify(user));
			// window.location.href = '/home';
		// })
		// .catch((err) => {
		// 	console.error('Error: ', err);
		// });

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

async function saveMoves(){
	var m = ["Arm_Drag", "Double_Leg"];
	let data = {moves: m}
	
	try
{
	var t = localStorage.getItem('token');
	if(t == null)
	{
		console.error('ERROR: NO TOKEN/ID FOUND');
	}
	const response = fetch('/api/saveMove',
	{
		method:'POST',
		body:JSON.stringify({
			Trans: m,
			token: t
		}),
		headers:{'Content-Type': 'application/json','Accept': 'application/json'}
	})
	.then(response => response.text())
	.then((response) =>{
		console.log('success:', response);
	})
	.catch((err) => {
		console.error('Error: ', err);
	});
}
catch(error)
{
	console.log(error);

}
}

function logout(){
	var t = localStorage.getItem('token');
	if(t)
	{
		console.log("token removed");
		localStorage.removeItem('token');
	}
}

async function search(input){
	console.log("search");
	
	var s = document.getElementById("search-field");
	
	var sr = document.getElementById("search-result");
	var rr = document.getElementById("recommended-result");
	
	if(s.value == "")
	{
		sr.style.display = "none";
		rr.style.display = "block";
	}
	else
	{
		
		sr.style.display = "block";
		rr.style.display = "none";
	}
	
	const response = fetch('/api/search',
	{
		method:'POST',
		body:JSON.stringify({
			name: s.value,
		}),
		headers:{'Content-Type': 'application/json','Accept': 'application/json'}
	})
	.then(response => response.text())
	.then((response) =>{
		console.log('success:', response);
		sr.innerHTML = "";
		var r = JSON.parse(response);
		console.log(r);
		for(var x = 0; x < r.length; x++)
		{
			var n = document.createElement("input");
			console.log(r[x]);
			n.onclick = function(){input.a.push(r[x]); console.log(input)};
			  n.type = "button";
			  n.classList.add("move-box");
			  n.innerHTML = r[x].Name;
			  sr.appendChild(n);
		}
	})
	.catch((err) => {
		console.error('Error: ', err);
	});
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export {storeToken, retrieveToken, Login, createAccount, saveMoves, logout, search, parseJwt};

// module.exports.Login = Login;
