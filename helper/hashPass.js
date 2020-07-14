const bcrypt = require('bcrypt')
let salt = bcrypt.genSaltSync(10);

function hashPas(value){

  return bcrypt.hashSync(value.password, salt);
  
}

module.exports = hashPas


