const express = require('express');

const { addUser, login } = require('../controllers/addUser');
const validationUser = require('../middlewares/validateUser');
const validationLogin = require('../middlewares/validateLogin');


const routerUser = express();

routerUser.post('/newuser', validationUser, addUser)
routerUser.post('/login', validationLogin, login)



module.exports = routerUser