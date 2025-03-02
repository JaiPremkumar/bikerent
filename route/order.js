const express = require('express')
const { getOrder, createOrder, singleOrder, myOrder } = require('../controller/orderCntrl')
const router = express.Router()

router.route('/oders').get(getOrder)
router.route('/order/new').post(createOrder)
router.route('/order').get(singleOrder)
router.route('/ordermy').get(myOrder)

module.exports=router;