const { Router } = require('express');
const { addProduct, getPorduct, getPorductById, deleteProductById, updateProduct } = require('../controllers/addProduct');
const verifyLoggedUser = require('../middlewares/authentication');


const productRouter = Router()
productRouter.use(verifyLoggedUser)

productRouter.post('/newproduct', addProduct)

productRouter.get('/product', getPorduct)

productRouter.get('/product/:id', getPorductById)

productRouter.patch('/product/:id', updateProduct)

productRouter.delete('/product/:id', deleteProductById)

module.exports = productRouter