const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const User = require("../models/user.js");
const Transitions = require("../models/transitions.js");

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

router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
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

    // try
    // {
    //   const token = require("./createJWT.js");
    //   ret = token.createToken(fn, ln, id);
    // }
    // catch(e)
    // {
    //   ret = { "error" : e.message };
    //   res.status(500).json(ret);
    // }
  }
  else
  {

    ret =  { "error" : "Login/Password incorrect" };
      res.status(200).json(ret);
  }

  //Return token
  //res.status(200).json(ret);

   // View (non-tokenized) results in postman
   res.status(200).json(results);

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

    // try
    // {
    //   if( token.isExpired(jwtToken))
    //   {
    //     error = 'The JWT is no longer valid';
    //     var r = { "error" : error, "jwtToken" : ''};
    //     console.log(error);
    //     res.status(200).json(r);
	//
    //   }
	//
    // }
    // catch(e)
    // {
    //   console.log(e.message);
    // }

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

    // try
    // {
    //   refreshedToken = token.refresh(jwtToken);
    // }
    // catch(e)
    // {
    //   console.log(e.message);
    //   res.status(500);
    // }


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

module.exports = router;
