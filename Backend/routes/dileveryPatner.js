const express = require('express');
const router = express.Router();
const deliveryPartner = require('../controllers/deliveryPartner.js');
const DeliveryPartner = require('../model/deliveryPartner.js')
const passport = require('passport');
const wrapAsync = require('../utils/wrapAsync.js');

// Index Route
router.get("/", wrapAsync(deliveryPartner.indexRoute));


// New Route
router.post("/",wrapAsync(deliveryPartner.newRoute));
router.get('/new',wrapAsync(deliveryPartner.newForm));

//login route
router.post('/login',passport.authenticate('deliveryPartner-local', {
    successRedirect: '/deliveryPartner/login/success',
    failureRedirect: '/deliveryPartner/login/fail',
    failureFlash: true
}),wrapAsync(deliveryPartner.loginRoute));
router.get('/loginForm',wrapAsync(deliveryPartner.loginForm));
router.get('/login/success',async (req,res) => {
    let {username , password} = req.body;
    let deliveryPartner = await DeliveryPartner.findOne({username :username});
    if (!deliveryPartner) {
        return res.status(404).json({ message: 'Delivery Partner not found' });
    }
    res.status(200).json({deliveryPartner});
});
router.get('/login/fail',(req,res) => {
        res.status(400).json({message : "Login unsuccessful"});

})

//login route
router.get('/login',wrapAsync(deliveryPartner.loginRoute))

// Show Route
router.get("/:id", wrapAsync(deliveryPartner.showRoute));


// Update Route
router.patch("/:id", wrapAsync(deliveryPartner.updateRoute));
router.get('/:id/update',wrapAsync(deliveryPartner.updateForm));


// Delete Route
router.delete("/:id", wrapAsync(deliveryPartner.deleteRoute));


module.exports = router;