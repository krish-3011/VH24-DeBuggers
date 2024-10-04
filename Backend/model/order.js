const mongoose = require('mongoose');
const Customer = require('./customer.js');
const DeliveryPartner = require('./deliveryPartner.js');
const Restaurant = require('./restaurant.js');

const timeSchema = new mongoose.Schema({
    et: {
        type: Date,
        required: true  
    },
    dt: {
        type: Date
    }
});

const orderSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
        unique:true,
        index: true   
    },
    deliveryPartnerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DeliveryPartner',
        required: true  
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true  
    },
    orderValue: {
        type: Number,
        required: true  
    },
    rating: {
        type: Number,
        min: 0,  
        max: 5   
    },
    time: {
        type: timeSchema,
        required: true  
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
