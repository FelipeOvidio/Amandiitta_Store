const express = require('express')
const { registerPurchase, listPurchase } = require('../controllers/addPurchase')

const purchaseRoueter = express()

purchaseRoueter.post('/new', registerPurchase)
purchaseRoueter.get('/purchase', listPurchase)

module.exports = purchaseRoueter