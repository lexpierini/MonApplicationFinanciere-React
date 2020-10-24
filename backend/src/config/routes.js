const express = require('express')

module.exports = function (server) {

    // Set base URL for all routes 
    const router = express.Router()
    server.use('/api', router)

    // Payment Cycle Routes
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}