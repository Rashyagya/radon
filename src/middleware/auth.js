const jwt = require("jsonwebtoken");

const validateToken = function(req, res, next) {
  try
    {let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
  
    console.log(token);
    
    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken) {
      return res.status(403).send({ status: false, msg: "token is invalid" });
    }
    
    next();
    }
    catch (err){
      console.log(err.message)
      res.status(500).send({msg:err.message})
    }  
}

// const authorise = function(req, res, next) {
//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];
//  let decodedToken = jwt.verify(token, 'functionup-radon')
//  let userToBeModified = req.params.userId
//  let userLoggedIn = decodedToken.userId
//  if (userToBeModified != userLoggedIn) return res.send({status:false, msg:'user logged is not allowed to modify the request data'})
//  next();

//} 
module.exports.validateToken = validateToken
//module.exports.authorise = authorise



