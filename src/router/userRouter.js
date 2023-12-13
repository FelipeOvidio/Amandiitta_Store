const express = require('express');


const { addUser, login, profileUser } = require('../controllers/addUser');
const validationUser = require('../middlewares/validateUser');
const validationLogin = require('../middlewares/validateLogin');
const verifyLoggedUser = require('../middlewares/authentication');


const routerUser = express();

routerUser.post('/newuser', validationUser, addUser)
routerUser.post('/login', validationLogin, login)
routerUser.use(verifyLoggedUser)
routerUser.get('/profile', profileUser)



module.exports = routerUser