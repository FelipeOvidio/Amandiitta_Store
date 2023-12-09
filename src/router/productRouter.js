const express = require('express');
const { addProduct } = require('../controllers/addProduct');

const productRouter = express()

productRouter.post('/newproduct', addProduct)

module.exports = productRouter