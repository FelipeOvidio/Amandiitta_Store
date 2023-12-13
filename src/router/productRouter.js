const express = require('express');
const { addProduct, getPorduct, getPorductById, deleteProductById, updateProduct } = require('../controllers/addProduct');
const verifyUserLoggad = require('../middlewares/authenticationToken');



const productRouter = express()
productRouter.use(verifyUserLoggad)
productRouter.post('/newproduct', addProduct)
productRouter.get('/product', verifyUserLoggad, getPorduct)
productRouter.get('/product/:id', getPorductById)
productRouter.patch('/product/:id', updateProduct)
productRouter.delete('/product/:id', deleteProductById)

module.exports = productRouter