const LocalStrategy = require('passport-local').Strategy;
const DeliveryPartner = require('../model/deliveryPartner.js');
const Restaurant = require('../model/restaurant.js');

module.exports = function(passport) {
    // Delivery Partner Local Strategy
    passport.use('deliveryPartner-local', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    async (username, password, done) => {
        try {
            const deliveryPartner = await DeliveryPartner.findOne({ username });
            if (!deliveryPartner) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            const isMatch = await deliveryPartner.comparePassword(password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, deliveryPartner);
        } catch (err) {
            return done(err);
        }
    }));

    // Restaurant Local Strategy
    passport.use('restaurant-local', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    async (username, password, done) => {
        try {
            const restaurant = await Restaurant.findOne({ username });
            if (!restaurant) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            const isMatch = await restaurant.comparePassword(password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, restaurant);
        } catch (err) {
            return done(err);
        }
    }));

    // Serialize user
    passport.serializeUser((user, done) => {
        console.log('Serializing user:', user.id);
        done(null, user.id); // Handles both Restaurant and DeliveryPartner
    });

    // Deserialize user
    passport.deserializeUser(async (id, done) => {
        console.log('Deserializing user with ID:', id);
        try {
            const restaurant = await Restaurant.findById(id);
            if (restaurant) {
                console.log('Restaurant found:', restaurant);
                return done(null, restaurant);
            }
            const deliveryPartner = await DeliveryPartner.findById(id);
            if (deliveryPartner) {
                console.log('Delivery Partner found:', deliveryPartner);
                return done(null, deliveryPartner);
            }
            console.log('No user found with that ID');
            return done(null, false, { message: 'User not found' });
        } catch (err) {
            return done(err);
        }
    });
};
