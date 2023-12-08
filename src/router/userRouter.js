const express = require('express');

const { addUser, login } = require('../controllers/addUser');


const routerUser = express();

routerUser.post('/newuser', addUser)
routerUser.post('/login', login)

module.exports = routerUser