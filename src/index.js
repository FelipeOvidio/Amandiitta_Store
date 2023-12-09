require('dotenv').config();
const express = require('express');
const { json } = require('express')
const router = require('./router/userRouter');
const routerUser = require('./router/userRouter');
const productRouter = require('./router/productRouter');

const app = express();

app.use(json());
app.use(router)
app.use(routerUser)
app.use(productRouter)

app.listen(process.env.PORT, () => { console.log('Star Serv') })