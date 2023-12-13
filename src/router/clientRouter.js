const express = require('express');
const addClient = require('../controllers/addClient');
const dataRegisterValidation = require('../middlewares/dataRegisterValidation');
const verifyLoggedUser = require('../middlewares/authentication');


const clientRouter = express();
clientRouter.use(verifyLoggedUser)
clientRouter.get('/test')
clientRouter.post('/newclient', dataRegisterValidation, addClient);



module.exports = clientRouter