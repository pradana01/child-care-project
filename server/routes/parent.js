const router = require('express').Router();
const parentController = require('../controllers/parent')

router.post('/register', parentController.parentRegister)
router.post('/login', parentController.parentLogin)

module.exports = router