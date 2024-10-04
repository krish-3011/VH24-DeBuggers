const express = require('express');
const passport = require('passport')
const router = express.Router();
const restaurant = require('../controllers/restaurant.js');
const wrapAsync = require('../utils/wrapAsync.js');

// Index Route
router.get("/", wrapAsync(restaurant.indexRoute));


// New Route
router.post("/",wrapAsync(restaurant.newRoute));
router.get('/new',wrapAsync(restaurant.newForm));


//login route
router.post('/login',passport.authenticate('local', {
    successRedirect: '/restaurant/login/success',
    failureRedirect: '/restaurant/login/fail',
    failureFlash: true
}),wrapAsync(restaurant.loginRoute));
router.get('/loginForm',wrapAsync(restaurant.loginForm));
router.get('/login/success',(req,res) => {
    res.render('restaurant/success');
});
router.get('/login/fail',(req,res) => {
    res.render('restaurant/fail');
})


// Show Route
router.get("/:id", wrapAsync(restaurant.showRoute));


// Update Route
router.patch("/:id", wrapAsync(restaurant.updateRoute));
router.get('/:id/update',wrapAsync(restaurant.updateForm));


// Delete Route
router.delete("/:id", wrapAsync(restaurant.deleteRoute));


module.exports = router;