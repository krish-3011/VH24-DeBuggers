const express = require('express');
const router = express.Router();
const deliveryPartner = require('../controllers/deliveryPartner.js');
const wrapAsync = require('../utils/wrapAsync.js');

// Index Route
router.get("/", wrapAsync(deliveryPartner.indexRoute));


// New Route
router.post("/",wrapAsync(deliveryPartner.newRoute));
router.get('/new',wrapAsync(deliveryPartner.newForm));


// Show Route
router.get("/:id", wrapAsync(deliveryPartner.showRoute));




// Update Route
router.patch("/:id", wrapAsync(deliveryPartner.updateRoute));
router.get('/:id/update',wrapAsync(deliveryPartner.updateForm));


// Delete Route
router.delete("/:id", wrapAsync(deliveryPartner.deleteRoute));

module.exports = router;