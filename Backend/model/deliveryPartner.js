const mongoose = require('mongoose');
const Badge = require('./badges.js');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const badgeSchema = new mongoose.Schema({
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Badge' 
    }
});

const deliveryPartnerSchema = new mongoose.Schema({
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
    ex: {
        token: {
            type: Number,
            required: true,  
            default: 1  
        },
        grade: {
            type: Number,
            required: true,  
            default: 1  
        }
    },
    badges: {
        type: [badgeSchema],
        default: []  
    }
});

//hasing password
deliveryPartnerSchema.pre('save' , async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();

});

// Method to check password
deliveryPartnerSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const DeliveryPartner = mongoose.model('DeliveryPartner', deliveryPartnerSchema);

module.exports = DeliveryPartner;
