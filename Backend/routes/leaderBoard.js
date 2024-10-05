const DeliveryPartner = require('../model/deliveryPartner.js');
const express = require('express');
const router = express.Router();

router.get('/',async (req,res)=>{
    let leaders = await DeliveryPartner.find({}).sort({'ex.xp' : -1});

    res.status(200).send({top:leaders});
})

module.exports = router;