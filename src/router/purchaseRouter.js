const { Router } = require('express');
const { registerPurchase, listPurchase } = require('../controllers/addPurchase')
const verifyLoggedUser = require('../middlewares/authentication')



const purchaseRoueter = Router()

purchaseRoueter.use(verifyLoggedUser)

purchaseRoueter.post('/new', registerPurchase)

purchaseRoueter.get('/purchase', listPurchase)

module.exports = purchaseRoueter