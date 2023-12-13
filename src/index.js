require('dotenv').config();
const express = require('express');
const { json } = require('express')

const routerUser = require('./router/userRouter');
const productRouter = require('./router/productRouter');
const purchaseRoueter = require('./router/purchaseRouter');
const clientRouter = require('./router/clientRouter');

const app = express();

app.use(express.json());
app.use(routerUser)
app.use(clientRouter)
app.use(productRouter)
app.use(purchaseRoueter)

app.listen(process.env.PORT, () => { console.log('Star Serv') })