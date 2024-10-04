const mongoose = require('mongoose');


const menuSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true  
    },
    price: {
        type: Number,
        required: true  
    }
});


const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    username: {
        type: String,
        required: true  
    },
    password: {
        type: String,
        required: true  
    },
    address: {
        type: String,
        required: true  
    },
    menu: {
        type: [menuSchema],
        default: []  
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
