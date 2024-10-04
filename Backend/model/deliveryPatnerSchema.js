const mongoose = require('mongoose');
const Badge = require('../model/badgesSchema.js')

const deliveryPartnerSchema = new mongoose.Schema({
    name:{
        type : String
    },
    username:{
        type : String
    },
    password : {
        type : String
    },
    ex : {
        type : {
            level : {
                type : Number
            },
            grade : {
                type : Number
            }
        }
    },
    badges:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Badge',
    }

});

const DeliveryPartner = mongoose.model('DeliveryPartner',deliveryPartnerSchema);

module.exports = DeliveryPartner;