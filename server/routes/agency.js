const router = require('express').Router();
const agencyController = require('../controllers/agency')
const authentication = require('../middlewares/authentication')

router.post('/register', agencyController.agencyRegister)


router.post('/login', agencyController.agencyLogin)


router.use(authentication)
router.put('/updateAgencyCredential', agencyController.updateAgencyCredential)

module.exports = router