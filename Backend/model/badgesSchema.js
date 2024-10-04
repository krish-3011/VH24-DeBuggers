const mongoose = require('mongoose');

const badgesSchema = new mongoose.Schema({
    name:{
        type : String
    }
});

const Badge = mongoose.model('Badge',badgesSchema);

module.exports = Badge;