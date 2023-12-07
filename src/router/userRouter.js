const express = require('express');

const { addUser } = require('../controllers/addUser');


const routerUser = express();

routerUser.post('/newuser', addUser)

module.exports = routerUser