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
            // Find the delivery partner by username
            const deliveryPartner = await DeliveryPartner.findOne({ username });
            if (!deliveryPartner) {
                console.log('Delivery Partner not found:', username);
                return done(null, false, { message: 'Incorrect username.' });
            }
            // Compare passwords
            const isMatch = await deliveryPartner.comparePassword(password);
            if (!isMatch) {
                console.log('Incorrect password for delivery partner:', username);
                return done(null, false, { message: 'Incorrect password.' });
            }
            console.log('Successful login for delivery partner:', username);
            return done(null, deliveryPartner);
        } catch (err) {
            console.error('Error during delivery partner authentication:', err);
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
            // Find the restaurant by username
            const restaurant = await Restaurant.findOne({ username });
            if (!restaurant) {
                console.log('Restaurant not found:', username);
                return done(null, false, { message: 'Incorrect username.' });
            }
            // Compare passwords
            const isMatch = await restaurant.comparePassword(password);
            if (!isMatch) {
                console.log('Incorrect password for restaurant:', username);
                return done(null, false, { message: 'Incorrect password.' });
            }
            console.log('Successful login for restaurant:', username);
            return done(null, restaurant);
        } catch (err) {
            console.error('Error during restaurant authentication:', err);
            return done(err);
        }
    }));

    // Serialize user (Both DeliveryPartner and Restaurant use the same serialization)
    passport.serializeUser((user, done) => {
        console.log('Serializing user with ID:', user._id);
        done(null, user._id); // Store user ID in session
    });

    // Deserialize user (Check if user is a DeliveryPartner or Restaurant)
    passport.deserializeUser(async (id, done) => {
        console.log('Deserializing user with ID:', id);
        try {
            // Try to find the user as a restaurant first
            const restaurant = await Restaurant.findById(id);
            if (restaurant) {
                console.log('Restaurant found:', restaurant.username);
                return done(null, restaurant);
            }

            // Try to find the user as a delivery partner
            const deliveryPartner = await DeliveryPartner.findById(id);
            if (deliveryPartner) {
                console.log('Delivery Partner found:', deliveryPartner.username);
                return done(null, deliveryPartner);
            }

            console.log('No user found with ID:', id);
            return done(null, false, { message: 'User not found' });
        } catch (err) {
            console.error('Error deserializing user:', err);
            return done(err);
        }
    });
};