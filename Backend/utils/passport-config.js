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

<<<<<<< HEAD
    // Serialize user (Both DeliveryPartner and Restaurant use the same serialization)
    passport.serializeUser((user, done) => {
        console.log('Serializing user with ID:', user._id);
        done(null, user._id); // Store user ID in session
    });

    // Deserialize user (Check if user is a DeliveryPartner or Restaurant)
=======
    passport.serializeUser((user, done) => {
        done(null, user.id); // Will serialize either Restaurant or DeliveryPartner
    });
    
>>>>>>> parent of 3df27de (new commit)
    passport.deserializeUser(async (id, done) => {
        try {
            // Try to find the user as a restaurant first
            const restaurant = await Restaurant.findById(id);
            if (restaurant) {
<<<<<<< HEAD
                console.log('Restaurant found:', restaurant.username);
=======
>>>>>>> parent of 3df27de (new commit)
                return done(null, restaurant);
            }

            // Try to find the user as a delivery partner
            const deliveryPartner = await DeliveryPartner.findById(id);
            if (deliveryPartner) {
<<<<<<< HEAD
                console.log('Delivery Partner found:', deliveryPartner.username);
                return done(null, deliveryPartner);
            }

            console.log('No user found with ID:', id);
            return done(null, false, { message: 'User not found' });
        } catch (err) {
            console.error('Error deserializing user:', err);
            return done(err);
=======
                return done(null, deliveryPartner);
            }
            done(new Error("User not found"));
        } catch (err) {
            done(err);
>>>>>>> parent of 3df27de (new commit)
        }
    });
    
};
