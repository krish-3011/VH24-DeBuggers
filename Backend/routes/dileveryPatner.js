const express = require('express');
const router = express.Router();
const deliveryPartner = require('../controllers/deliveryPartner.js');
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
router.get('/login/success',(req,res) => {
    res.status(200).json({message : "Login successful"});
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