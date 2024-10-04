const LocalStrategy = require('passport-local').Strategy;
const DeliveryPartner = require('../model/deliveryPartner.js');
const Restaurant = require('../model/restaurant.js');


module.exports = function(passport) {
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

    passport.serializeUser((user, done) => {
        done(null, user.id); // Will serialize either Restaurant or DeliveryPartner
    });
    
    passport.deserializeUser(async (id, done) => {
        try {
            const restaurant = await Restaurant.findById(id);
            if (restaurant) {
                return done(null, restaurant);
            }
            const deliveryPartner = await DeliveryPartner.findById(id);
            if (deliveryPartner) {
                return done(null, deliveryPartner);
            }
            done(new Error("User not found"));
        } catch (err) {
            done(err);
        }
    });
    
};
