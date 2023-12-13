const express = require('express');
const addClient = require('../controllers/addClient');
const dataRegisterValidation = require('../middlewares/dataRegisterValidation');
const verifyLoggedUser = require('../middlewares/authentication');


const router = express();

router.use(verifyLoggedUser)
router.post('/newclient', dataRegisterValidation, addClient);



module.exports = router;