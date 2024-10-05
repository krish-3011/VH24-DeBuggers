const express = require('express');
const mongoose = require('mongoose');
const deliveryPartner = require('./routes/dileveryPatner.js');
const leaderBoard = require('./routes/leaderBoard.js');
const order = require('./routes/order.js');
const restaurant = require('./routes/restaurant.js');
const methodOverride = require('method-override');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Environment variables
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const SECURE_CODE = process.env.SECURE_CODE;

app.use(cors({
    origin: ['https://vh24-debuggers-frontend.onrender.com'], // Specify your frontend origin
    credentials: true // Allow cookies to be sent with requests
}));

// Connecting to the database
async function main() {
    await mongoose.connect(DB_URL);
}
main()
    .then(() => console.log('Database Connected'))
    .catch((err) => {
        console.log(`Error in connecting to database: ${err}`);
    });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(flash());

// Set up session
app.use(session({
    secret: SECURE_CODE,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: DB_URL,
        collectionName: 'sessions'
    })
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/deliveryPartner', deliveryPartner);
app.use('/restaurant', restaurant);
app.use('/leaderBoard', leaderBoard);
app.use('/order', order);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
