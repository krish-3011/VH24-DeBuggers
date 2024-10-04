const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name:{
        type:String
    },
    password : {
        type : String
    },
    address : {
        type : String
    }
});

const Restaurant = new mongoose.model('Restaurant',restaurantSchema);

module.exports = Restaurant