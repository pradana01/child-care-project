const router = require('express').Router();
const parentController = require('../controllers/parent')

router.post('/register', parentController.parentRegister)

module.exports = router