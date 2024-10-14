const express = require('express');
const app = express();
const mongoose = require('mongoose');
const deliveryPartner = require('./routes/dileveryPartner.js');  // Corrected typo
const restaurant = require('./routes/restaurant.js');
const methodOverride = require('method-override');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const SECURE_CODE = process.env.SECURE_CODE;

// Connecting to database
async function main() {
    try {
        await mongoose.connect(DB_URL);
        console.log('Database Connected');
    } catch (err) {
        console.log(`Error in connecting to database: ${err}`);
    }
}

main();

// General CORS setup for all routes
app.use(cors({
    origin: 'https://vh24-debuggers-frontend.onrender.com',  // Allow only this frontend origin
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],       // Allowed HTTP methods
    credentials: true,                                        // Allow credentials (cookies, etc.)
    allowedHeaders: [
        'Content-Type', 
        'Authorization', 
        'sec-ch-ua', 
        'sec-ch-ua-mobile', 
        'sec-ch-ua-platform', 
        'Referer', 
        'User-Agent'
    ] // List any other headers the frontend might send
}));

// Handle OPTIONS preflight for all routes
app.options('*', cors({
    origin: 'https://vh24-debuggers-frontend.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}));

// Continue with the rest of your middleware and routes setup here

// Setting up Express configurations
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "/public")));
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

// Middleware to check req.user
app.use((req, res, next) => {
    console.log('Current user:', req.user); // Check if req.user is populated
    next();
});

// Routes
app.use('/deliveryPartner', deliveryPartner);  // Make sure the file exists
app.use('/restaurant', restaurant);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
