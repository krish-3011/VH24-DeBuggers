const LocalStrategy = require('passport-local').Strategy;
const DeliveryPartner = require('../../model/deliveryPartner');

module.exports = function(passport) {
    passport.use(new LocalStrategy({
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

    passport.serializeUser((deliveryPartner, done) => {
        done(null, deliveryPartner.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const deliveryPartner = await DeliveryPartner.findById(id);
            done(null, deliveryPartner);
        } catch (err) {
            done(err);
        }
    });
};
