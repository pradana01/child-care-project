
const jwt = require('jsonwebtoken');
const SECRETKEY = process.env.SECRETKEY;

function jsonWebToken(param) {
  
  const access_token = jwt.sign({ id: param.id, email: param.email ,role: param.role}, SECRETKEY);

	return access_token
}

module.exports = jsonWebToken;
