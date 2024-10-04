const mongoose = require('mongoose');
const Customer = require('./customerSchema.js');
const DeliveryPartner = require('./deliveryPatnerSchema.js');
const Restaurant = require('./restaurantSchema.js');


const orderSchema = new mongoose.Schema({
    customerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Customer'
    },
    deliveryPartnerID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'DeliveryPartner'
    },
    restaurantId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Restaurant'
    },
    orderValue : {
        type : Number
    },
    rating : {
        type : Number
    }
});

const Order = new mongoose.model('Order',orderSchema);

module.exports = Order;