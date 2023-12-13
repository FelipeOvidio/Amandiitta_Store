const express = require('express');
const addClient = require('../controllers/addClient');
const dataRegisterValidation = require('../middlewares/dataRegisterValidation');
const verifyUserLoggad = require('../middlewares/authenticationToken');

const router = express();


router.post('/newclient', dataRegisterValidation, addClient);



module.exports = router;