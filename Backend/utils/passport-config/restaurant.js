const LocalStrategy = require('passport-local').Strategy;
const Restaurant = require('../../model/restaurant.js');

module.exports = function(passport) {
    passport.use(new LocalStrategy({
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

    passport.serializeUser((restaurant, done) => {
        done(null, restaurant.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const restaurant = await Restaurant.findById(id);
            done(null, restaurant);
        } catch (err) {
            done(err);
        }
    });
};
