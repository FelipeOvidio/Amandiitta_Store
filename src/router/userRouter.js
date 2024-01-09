const { Router } = require('express');

const { create, login, profileUser } = require('../controllers/addUser');
const validationUser = require('../middlewares/validateUser');
const validationLogin = require('../middlewares/validateLogin');
const verifyLoggedUser = require('../middlewares/authentication');


const routerUser = Router();

routerUser.post('/create', validationUser, create)
routerUser.post('/login', validationLogin, login)
routerUser.use(verifyLoggedUser)
routerUser.get('/profile', profileUser)


module.exports = routerUser