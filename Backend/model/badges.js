const mongoose = require('mongoose');

const badgesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
        index: true
    }
});

const Badge = mongoose.model('Badge', badgesSchema);

module.exports = Badge;