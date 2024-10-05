const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  
    },
    points: {
        type: Number,
        required: true,
    },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
