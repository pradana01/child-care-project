const jwt = require('jsonwebtoken');

const SECRETKEY = 'mama';

function jsonWebTokenVerify(param){
  return jwt.verify(param, SECRETKEY);
}


module.exports = jsonWebTokenVerify