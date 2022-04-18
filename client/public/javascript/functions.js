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
			console.log(data.accessToken);
            localStorage.setItem('token', data.accessToken);
			localStorage.setItem('id', data.id);
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
			window.location.href = '/home';
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
	var firstName;
	var lastName;

	firstName = document.getElementById("fn").value;
	lastName = document.getElementById("ln").value;
	loginName = document.getElementById("un").value;
	email = document.getElementById("em").value;
	loginPassword = document.getElementById("pw").value;

	let data = {login:loginName,email:email,password:loginPassword,lastName:lastName,firstName:firstName};
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
			firstName: firstName,
			lastName: lastName
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

async function loadMoves(m)
{
	try
{
	var t = localStorage.getItem('token');
	if(t == null)
	{
		console.error('ERROR: NO TOKEN/ID FOUND');
		alert("You must be logged in to Load Moves");
		return;
	}
	const response = fetch('/api/loadMove',
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
		m.a = JSON.parse(response);
		for(var x = 0; x < m.a.length; x++)
		{
			var o = document.createElement("div");
			o.innerHTML = m.a[x].Name;
			var p = document.getElementById("move-buffer");
			p.appendChild(o);
		}
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

async function saveMoves(m){
	let data = {moves: m}

	try
{
	var t = localStorage.getItem('token');
	console.log(t);
	if(t == null)
	{
		console.error('ERROR: NO TOKEN/ID FOUND');
		alert("You must be logged in to Save Moves");
		return;
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
	var signin = document.getElementById("sign-in");
	var logout = document.getElementById("logout");
	signin.style.display = "block";
	logout.style.display = "none";
}

async function search(input, results){
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
		results.a = r;
		for(var x = 0; x < r.length; x++)
		{
			var n = document.createElement("button");
			console.log(r[x]);
			let y = x;
			n.onclick = function(){
				input.a.push(results.a[y]);
				console.log(input.a);
				var o = document.createElement("div");
				o.innerHTML = results.a[y].Name;
				o.id = results.a[y].Name;
				o.classList.add("move-list-item");
				var p = document.getElementById("move-buffer");
				p.appendChild(o);
			};
			  n.classList.add("move-box");
			  n.innerHTML = r[x].Name;
			  sr.appendChild(n);
		}
	})
	.catch((err) => {
		console.error('Error: ', err);
	});
}

async function getProfile()
{
	try
{
	var t = localStorage.getItem('token');
	console.log(t);
	if(t == null)
	{
		console.error('ERROR: NO TOKEN/ID FOUND');
		alert("You need to be logged in to edit profile");
		return;
	}
	const response = fetch('/api/getProfile',
	{
		method:'POST',
		body:JSON.stringify({
			token: t
		}),
		headers:{'Content-Type': 'application/json','Accept': 'application/json'}
	})
	.then(response => response.text())
	.then((response) =>{
		console.log('success:', response);
		var r = JSON.parse(response);
		document.getElementById("first").value = r.FirstName;
		document.getElementById("last").value = r.LastName;
		document.getElementById("email").value = r.Email;
		document.getElementById("username").value = r.Login;
	})
	.catch((err) => {
		console.error('Error: ', err);
	});
}
catch(err){
	console.error(err);
}};

async function update()
{

	var f = document.getElementById("first").value;
	var l = document.getElementById("last").value;
	var e = document.getElementById("email").value;
	var u = document.getElementById("username").value;
	let data = {FirstName: f, LastName: l, Email: e, Login: u};

	try
{
	var t = localStorage.getItem('token');
	console.log(t);
	if(t == null)
	{
		console.error('ERROR: NO TOKEN/ID FOUND');
		alert("You must be logged in to Update Profile");
		return;
	}
	const response = fetch('/api/update',
	{
		method:'POST',
		body:JSON.stringify({
			data: data,
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
};

export {storeToken, retrieveToken, Login, createAccount, saveMoves, logout, search, loadMoves, update, getProfile};

// module.exports.Login = Login;
