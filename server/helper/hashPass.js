const bcrypt = require('bcrypt')
let salt = bcrypt.genSaltSync(10);

function hashPas(value){

  return bcrypt.hashSync(value, salt);
  
}

module.exports = hashPas


