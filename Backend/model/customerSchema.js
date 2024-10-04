const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name:{
        type:String
    },
    username : {
        type : String
    },
    password : {
        type : String
    },
    address : {
        type : String
    }
});

const Customer = new mongoose.model('Customer',customerSchema);

module.exports = Customer