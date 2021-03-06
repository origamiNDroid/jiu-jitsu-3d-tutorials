const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { callbackify } = require("util");
const Todo = require('../models/todo');
const Transitions = require("../models/transitions.js");
const User = require("../models/user.js");
require('dotenv').config();

router.post('/delete', async (req, res, next) => {

  const { login } = req.body;

  const results = await User.findOneAndDelete({Login: login})
  .then((ret) => {
	  console.log(ret);
	  res.status(200).json(ret);
  }).catch((err =>
	  console.log(err)
  ));
});

router.post('/login', async (req, res, next) =>
{

  // incoming: login, password
  // outgoing: id, firstName, lastName, error
  const { login, password } = req.body;

	// To hash passwords later on, no hash for easy testing
  //var md5 = crypto.createHash('md5').update(password).digest('hex');

  const results = await User.find({Login: login, Password: password});

  var id = -1;
  var fn = '';
  var ln = '';

  var t;

  if( results.length > 0 )
  {
    // console.log(results)
    idf = results[0]._id;
    fnf = results[0].FirstName;
    lnf = results[0].LastName;

    try
    {
      const token = require("../createJWT.js");
	  let d = {firstName: fnf, lastName: lnf, id: idf};
      t = token.createToken(d);
	  console.log("API RETURN");
	  console.log(t);
	  res.status(200).json(t);
    }
    catch(e)
    {
      ret = { "error" : e.message };
      res.status(500).json(ret);
    }
  }
  else
  {

    ret =  { "error" : "Login/Password incorrect" };
      res.status(500).json(ret);
  }

   // View (non-tokenized) results in postman
   // res.status(200).json(results);

});

router.post('/addUser', async (req, res, next) =>
{
    // incoming: login, password, email, firstName, lastName
    // outgoing: error, JWT tokn

    const { login, password, email, firstName, lastName } = req.body;
    var error = '';

    // Hash 'password' string before entering into database
	// Commented out for easy testing.
    //var md5 = crypto.createHash('md5').update(password).digest('hex');

    try
    {
      if( token.isExpired(jwtToken))
      {
        error = 'The JWT is no longer valid';
        var r = { "error" : error, "jwtToken" : ''};
        console.log(error);
        res.status(200).json(r);

      }
    }
    catch(e)
    {
      console.log(e.message);
    }

    var flag = 0;

    try {
      const count = await User.countDocuments({ Login : login });
      if(count>0) { flag = 1; }
      console.log("FLAG: ", flag);
      if(flag == 1){
        console.log("already exists");
        error = "Username already exists.";
        let ret = { error : error };
        res.status(200).send(ret);

        return;
      }
    } catch(e) {
      error = e.message;
      let ret = { error: error };
      res.status(200).send(ret);
    }

    const newUser = new User({Login:login, FirstName:firstName, Email:email, LastName:lastName, Password:password});
    try
    {
      newUser.save();

    }
    catch(e)
    {
      console.log(e.toString());
      res.status(500);

    }

	const mailer = require("@sendgrid/mail");
	mailer.setApiKey("SENDGRID_API_KEY");

	rand = Math.floor((Math.random() * 100) + 54);

	const msg = {
	  to: newUser.Email,
	  from: "jiujitsu3dtutorials@gmail.com",
	  subject: "Jiu-Jitsu 3D Tutorials: Email Verification",
	  text:"Thanks for joining Jiu-Jitsu 3D Tutorials! \n\n Please verify your email by clicking the link:\n http:\/\/" + req.headers.host + "\/confirmation\/" + user.email + "\/" + rand + "\n\n Thank you!\n"
	  };
	  //console.log(newUser.email);
	  mailer.send(msg).then(() => {
		console.log('Message sent')
	  }).catch((error) => {
		//console.log(error.response.body)
	  })

    var refreshedToken = null;

    try
    {
      refreshedToken = token.refresh(jwtToken);
    }
    catch(e)
    {
      console.log(e.message);
      res.status(500);
    }


    var ret = { "error": error, jwtToken: refreshedToken };
    res.status(200).json(ret);

});

router.post('/search', async (req, res, next) =>
{

	// incoming: userId, search
	// outgoing: results[string: ingNames], error
	// - returns an array of strings back to user, filled with
	//   ingredients

	var error = '';
	//const { search, jwtToken } = req.body;
	// const { search } = req.body;
	const { name } = req.body;

	// try
	// {
	//   if( token.isExpired(jwtToken))
	//   {
	//
	//     var r = { "error" : "The JWT is no longer valid", jwtToken: ''};
	//     res.status(200).json(r);
	//
	//     return;
	//   }
	// }
	// catch(e)
	// {
	//   console.log(e.message);
	// }

	// var _search = search.trim();

	//const db = client.db();
	// const results = await db.collection('Transitions').find({"transitions":{$regex:_search+'.*', $options:'r'}}).toArray();
	const results = await Transitions.find({Name:{$regex: name, $options: '$i'}})
	.then((ret) => {
		console.log(ret);
		res.status(200).json(ret);
	}).catch((err => {
		console.log(err);
		res.status(500).json(err);
	}));
	// try
	// {
	//   refreshedToken = token.refresh(jwtToken);
	// }
	// catch(e)
	// {
	//   console.log(e.message);
	// }

});

router.post('/loadMove', async (req, res, next) =>
{
	const { token } = req.body;

	try
	{
		const jwt = require("jsonwebtoken");
		console.log(token);
		const tv = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		const userid = tv.id;

		const T = await User.findOne(
		  { _id: userid },
		  { Transitions_List: 1 });
		  var Transitions_List = T.Transitions_List;
		  var r = [];
		  console.log(Transitions_List);

		 for(var x = 0; x < Transitions_List.length; x++)
		 {
			 var n = await Transitions.findOne(
	 		  { _id: Transitions_List[x] });
			  console.log("A");
			  console.log(n);
			  console.log("B");
			  r.push(n);
		 }
		 console.log(r);
		res.status(200).send(r);
	}
	catch(e)
	{
		error = e.message;
		let ret = { error : error };
		res.status(500).send(ret);
	}
});

router.post('/saveMove', async (req, res, next) =>
{
	/// FUNCTION: Add an ingredient to User's Pantry
	// incoming: [JSON Object containing]: userId (login), ingredientID (from external api), quantity
	// outgoing: error

	var err = '';
	const { Trans, token } = req.body;
	console.log(token);
	console.log(Trans);
	try
	{
		const jwt = require("jsonwebtoken");
		console.log("1");
		console.log(token);
		const tv = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		console.log(tv);
		const userid = tv.id;

		await User.findOneAndUpdate(
		  { _id: userid },
		  { $set: { Transitions_List: [] } });

		console.log(Trans.a);
		for(var x = 0; x < Trans.a.length; x++)
		{
			var obj = Trans.a[x];
			console.log(obj);
			console.log(obj._id);
		const newOne = await User.findOneAndUpdate(
		  { _id: userid },
		  { $push: { Transitions_List: obj._id } }
		  );
		}
		res.status(200).send("Saved Moves");
	}
	catch(e)
	{
		error = e.message;
		let ret = { error : error };
		res.status(500).send(ret);
	}

	/*
	var refreshedToken = null;
	try
	{
		 refreshedToken = token.refresh(jwtToken);
	}
	catch(e)
	{
		 console.log(e.message);
	}
	*/

	//var ret = { error: error, jwtToken: refreshedToken }

	// let ret = { error: err};
	// res.status(200).json(ret);

});

router.post('/getProfile', async (req, res, next) =>
{
	/// FUNCTION: Add an ingredient to User's Pantry
	// incoming: [JSON Object containing]: userId (login), ingredientID (from external api), quantity
	// outgoing: error

	var err = '';
	const { token } = req.body;
	console.log(token);
	try
	{
		const jwt = require("jsonwebtoken");
		console.log(token);
		const tv = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		console.log(tv);
		const userid = tv.id;

		var user = await User.findOne(
		  { _id: userid },
		  { Login : 1, FirstName : 1, LastName : 1, Email : 1});

		console.log(user);
		res.status(200).send(user);
	}
	catch(e)
	{
		error = e.message;
		let ret = { error : error };
		res.status(500).send(ret);
	}

	/*
	var refreshedToken = null;
	try
	{
		 refreshedToken = token.refresh(jwtToken);
	}
	catch(e)
	{
		 console.log(e.message);
	}
	*/

	//var ret = { error: error, jwtToken: refreshedToken }

	// let ret = { error: err};
	// res.status(200).json(ret);

});

router.post('/update', async (req, res, next) => {
	const {token, data} = req.body;

	try {
		const jwt = require("jsonwebtoken");
		console.log(token);
		const tv = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		console.log(tv);
		const userid = tv.id;

		var user = await User.findOneAndUpdate(
		  { _id: userid },
		  { $set:{FirstName: data.FirstName, LastName: data.LastName, Email: data.Email, Login:data.Login}});
	} catch (err) {
	console.log(err)
	}

	try{
		res.status(200).send(":)");
	} catch(e) {
		error = e.message;
		let ret = { error : error };
		res.status(200).send(ret);
	}
});

router.get('/verify', function(req,res){
  console.log(req.protocol + "://" +req.get('host')) == ("http://" + host);
  if((req.protocol + "://" + req.get('host')) == ("http://" + host))
  {
	if(req.query.id == rand)
	{
	  console.log("email is verified");
	  res.end("<h1>Email has been successfully verified<h1>");
	}
	else {
	  console.log("email is not verified");
	  res.end("<h1>Email has NOT been successfully verified<h1>");
	}
  }
  else {
	res.end("<h1>Source Unknown<h1>");
  }
});

router.post('/forgot', function(req, res, next){
  async.waterfall([
	function(done){
	  crypto.randomBytes(20, function(err, buf){
		var token =buf.toString('hex');
		done(err, token);
	  });
	},
	function(token, done){
	  User.findOne({ email: req.body.email}, function(err, user){
		if(!user){
		  req.flash('error', 'No account was found with that email. ');
		  return res.redirect('/forgot');
		}

		user.resetPasswordToken = token;
		user.resetPasswordExpires = Date.now() + 3600000;

		user.save(function(err){
		  done(err, token, user);
		});
	  });
	},
	function(token, user, done){

	  const mailer = require("@sendgrid/mail");
	  mailer.setApiKey("SENDGRID_API_KEY");

	  const msg = {
		to: user.email,
		from: "jiujitsu3dtutorials@gmail.com",
		subject: "JiuJitsu 3D Tutorials: Password Reset",
		text:"Here is your password reset link: \n\n Please reset by clicking the link:\n http://" + req.headers.host + "/reset/" + token + "\n\n Thank you!\n"
		};
		//console.log(newUser.email);
		mailer.send(msg).then(() => {
		  console.log('Message sent')
		}).catch((error) => {
		  //console.log(error.response.body)
		})
	}

  ], function(err){
	console.log('this err' + ' ' + err)
	res.redirect('/login');
  });
});

router.get('/forgot', function(req, res){
  res.render('forgot',{
	User: req.user
  });
});

router.get('/reset/:token', function(req, res){
  User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires:{$gt: Date.now()}}, function(err,user){
	console.log(user);

	if(!user){
	  req.flash('error', 'Password reset token is invalid or has expired.');
	  return res.redirect('/forgot');
	}
	res.render('reset', {
	  User: req.user
	});
  });
});

router.post('/reset/:token', function(req, res){
  async.waterfall([
	function(done){
	  User.findOne({ resetPasswordToken: req.body.token, resetPasswordExpires:{$gt:Date.now()}}, function(err, user,next){
		if(!user){
		  req.flash('error', 'Password reset token is invalid or has expired');
		  return res.redirect('back');
		}

		user.password = req.body.password;
		user.resetPasswordToken = undefined;
		user.resetPasswordExpires = undefined;
		console.log('password' + user.password + 'and the user is' + user)

		user.save(function(err){
		  if(err){
			console.log('err1');
			return resdirect('back');
		  }else{
			console.log("err 2");
			req.logIn(user, function(err){
			  done(err,user);
			});
		  }
		});
	  });
	},

	function(user, done){

	  const mailer = require("@sendgrid/mail");
	  mailer.setApiKey("SENDGRID_API_KEY");

	  const msg = {
		to: user.email,
		from: "jiujitsu3dtutorial@gmail.com",
		subject: "JiuJitsu Tutorials: Password has been changed",
		text:"Here is your password reset confirmation."
		};
		//console.log(newUser.email);
		mailer.send(msg).then(() => {
		  console.log('Message sent')
		}).catch((error) => {
		  //console.log(error.response.body)
		})
	  }
  ],function(err){
	res.direct('/login');
  });
});

router.post('/rating', async (req, res, next) =>
{
	// FUNCTION: Add rating to a transition
	// Incoming: [JSON Object containing]: moveID, rating
	// Outgoing: error

	var err = '';
	const { id, rating } = req.body;

	var objectId = mongoose.Types.ObjectId(id);
  	var rate = parseInt(rating);

	try
	{
		if (rate > 5)
		{
			error = "Value must be below 5.";
			let ret = { error : error };
			res.status(200).send(ret);
			return;
		}

		const newOne = await Transitions.findOneAndUpdate(
		  { _id: objectId },
		  { $push: { Ratings: rate } },
		  { upsert: true },
		  function (error, success) {
			if(error) {
			  console.log("ERROR: " + error);
			} else {
			  console.log("SUCCESS: " + success);
			}
		 });

	}
	catch(e)
	{

	 err = e.toString();

	}

	try{
		const updated = await Transitions.findOne({ _id : objectId });
		console.log(updated);
		res.status(200).send(updated);
	} catch(e) {
		error = e.message;
		let ret = { error : error };
		res.status(200).send(ret);
	}
});

module.exports = router;
