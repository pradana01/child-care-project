const bcrypt = require('bcrypt')

function compareSync(pass1, pass2){
  return bcrypt.compareSync(pass1, pass2)
}

module.exports = compareSync