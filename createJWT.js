const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createToken = function ( fn, ln, id )
{
    return _createToken( fn, ln, id );
}

_createToken = function ( d )
{
    try
    {
      const expiration = new Date();
	  console.log(d);
      const token =  jwt.sign( d, process.env.ACCESS_TOKEN_SECRET);
      // In order to exoire with a value other than the default, use the
       // following
      /*
      const accessToken= jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,
         { expiresIn: '30m'} );
                       '24h'
                      '365d'
      */
	  console.log(token);
      var ret = {accessToken: token, id: d.id};
	  return ret;
    }
    catch(e)
    {
      var ret = {error:e.message};
    }
    return ret;
}

exports.isExpired = function( token )
{
   var isError = jwt.verify( token, process.env.ACCESS_TOKEN_SECRET,
     (err, verifiedJwt) =>
   {
     if( err )
     {
       return true;
     }
     else
     {
       return false;
     }
   });
   return isError;
}

exports.refresh = function( token )
{
  var ud = jwt.decode(token,{complete:true});
  var userId = ud.payload.id;
  var firstName = ud.payload.firstName;
  var lastName = ud.payload.lastName;
  return _createToken( firstName, lastName, userId );

}
