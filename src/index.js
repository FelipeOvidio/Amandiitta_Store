require('dotenv').config();
const express = require('express');
const router= require('./router/index')

const port = process.env.PORT|| process.env.PORT_LOCAL

const app = express();
app.use(express.json());
app.use(router)


app.listen(port, () => { console.log('Server init  http://localhost:'+port) })