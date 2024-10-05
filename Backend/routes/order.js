const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const orderFun  = require('../controllers/order.js')

router.post('/',wrapAsync(orderFun.newRoute));
router.get('/new',wrapAsync(orderFun.newForm));

module.exports = router;