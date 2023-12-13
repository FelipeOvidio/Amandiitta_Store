require('dotenv').config();
const express = require('express');
const { json } = require('express')
const router = require('./router/userRouter');
const routerUser = require('./router/userRouter');
const productRouter = require('./router/productRouter');
const purchaseRoueter = require('./router/purchaseRouter');
const verifyUserLoggad = require('./middlewares/authenticationToken');

const app = express();

app.use(json());
app.use(routerUser)

app.use(router)
app.use(productRouter)
app.use(purchaseRoueter)

app.listen(process.env.PORT, () => { console.log('Star Serv') })