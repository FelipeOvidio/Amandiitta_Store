const { Router } = require('express');

const routerUser = require('./userRouter');
const productRouter = require('./productRouter');
const purchaseRoueter = require('./purchaseRouter');
const clientRouter = require('./clientRouter');

// JOI const {} = require('../middlewares/schema/login')

const routes = Router()

routes.use(routerUser)

routes.use(clientRouter)

routes.use(productRouter)

routes.use(purchaseRoueter)

module.exports = routes




