const { Router } = require('express');
const product = require('../controllers/addProduct')

const verifyLoggedUser = require('../middlewares/authentication');


const productRouter = Router()

productRouter.use(verifyLoggedUser)

productRouter.post('/newproduct', product.addProduct)

productRouter.get('/product', product.getPorduct)

productRouter.get('/product/:id', product.getPorductById)

productRouter.patch('/product/:id', product.updateProduct)

productRouter.delete('/product/:id', product.deleteProductById)

module.exports = productRouter