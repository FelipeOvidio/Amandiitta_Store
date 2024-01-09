const { Router } = require('express');
const product = require('../controllers/addProduct')

const verifyLoggedUser = require('../middlewares/authentication');
const IdParamsVerify = require('../middlewares/IdParamsVerify')


const productRouter = Router()

productRouter.use(verifyLoggedUser)

productRouter.post('/newproduct', product.addProduct)

productRouter.get('/product', product.getPorduct)

productRouter.get('/product/:id',IdParamsVerify.paramsVerify, product.getPorductById)

productRouter.patch('/product/:id', IdParamsVerify.paramsVerify, product.updateProduct)

productRouter.delete('/product/:id', IdParamsVerify.paramsVerify, product.deleteProductById)

module.exports = productRouter