const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { callbackify } = require("util");
const Todo = require('../models/todo');
const Transitions = require("../models/transitions.js");
const User = require("../models/user.js");

router.get('/todos', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Todo.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/todos', (req, res, next) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/delete/:Login', async (req, res, next) => {
  User.findOneAndDelete({Login: req.params.Login}),
    (err, result) => {
      if (err) return res.send(500, err)
      console.log('got deleted');
      //res.redirect('/');
  }
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

  var ret;

  if( results.length > 0 )
  {
    console.log(results)
    id = results[0]._id;
    fn = results[0].FirstName;
    ln = results[0].LastName;

    try
    {
      const token = require("./createJWT.js");
      ret = token.createToken(fn, ln, id);
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
      res.status(200).json(ret);
  }

  //Return token
  res.status(200).json(ret);

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
	}).catch((err =>
		console.log(err)
	));
	var _ret = [];


	var refreshedToken = null;

	// try
	// {
	//   refreshedToken = token.refresh(jwtToken);
	// }
	// catch(e)
	// {
	//   console.log(e.message);
	// }

	var ret = { results:_ret, error: error, jwtToken: refreshedToken };

	// Testing comments
	// console.log(ret);
	// res.status(200).json(ret);

});

router.post('/saveMove', async (req, res, next) =>
{
	/// FUNCTION: Add an ingredient to User's Pantry
	// incoming: [JSON Object containing]: userId (login), ingredientID (from external api), quantity
	// outgoing: error

	var err = '';
	const { login, id } = req.body;

	// user = new User({Login:login});
	// move = new Transitions({Name:name});
	//
	// user.Transitions_List.push(move);
	//user.save(callback);

	var objectId = mongoose.Types.ObjectId(id);

	try
	{
		// User.findOne({Login:login})
		// 	.populate('Transitions_List').exec(function(err, user){
		// 		if(err) return handleError(err);
		// 		console.log(user);
		// 	})

		const newOne = await User.findOneAndUpdate(
		  { Login: login },
		   	// Transitions_List: name}
		  	// .populate('Transitions').exec((err, transitions) => {
			// 	console.log("Populated: " + transitions);
			// }));

		  { $push: { Transitions_List: objectId } },
		  { upsert: true },
		  function (error, success) {
			if(error) {
			  console.log("ERROR: " + error);
			  //callback(error);
			} else {
			  console.log("SUCCESS: " + success);
			}
		 });

	}
	catch(e)
	{

	 err = e.toString();

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

	//var ret = { error: error, jwtToken: refreshedToken };
	try{
		const updated = await User.findOne({ Login : login });
		console.log(updated);
		res.status(200).send(updated);
	} catch(e) {
		error = e.message;
		let ret = { error : error };
		res.status(200).send(ret);
	}

	// let ret = { error: err};
	// res.status(200).json(ret);

});

/*app.patch('/user/:id', async (req, res, next) => {
  try {
    const updated = await User.updateOne(
      {_id = req.params.id},
      { $set: {FirstName: req.body.FirstName} },
      { $set: {LastName: req.body.LastName}},
      { $set: {Login: req.body.Login}},
      { $set: {Email: req.body.Email}},
    )

    res.json(updated)

  } catch (err) {
    console.log(err)
  }
});*/

module.exports = router;
