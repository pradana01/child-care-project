const jwt = require('jsonwebtoken');

const SECRETKEY = process.env.SECRETKEY;

function jsonWebTokenVerify(param){
  return jwt.verify(param, SECRETKEY);
}


module.exports = jsonWebTokenVerify