
const jwt = require('jsonwebtoken');
const SECRETKEY = 'mama';

function jsonWebToken(param) {
  
  const access_token = jwt.sign({ id: param.id, email: param.email, username:param.username}, SECRETKEY);

	return access_token
}

module.exports = jsonWebToken;
