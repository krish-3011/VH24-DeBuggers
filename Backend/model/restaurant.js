const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');


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
        required: true,
        unique:true,
        index: true   
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

//hasing password
restaurantSchema.pre('save' , async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();

});

// Method to check password
restaurantSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
