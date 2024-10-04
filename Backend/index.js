const express = require('express');
const app = express();
const mongoose = require('mongoose');
const deliveryPartner = require('./routes/dileveryPatner.js');
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
    await mongoose.connect(DB_URL);
}

// Whitelist of allowed origins
const whitelist = ['https://vh24-debuggers-frontend.onrender.com'];

// Set up the CORS options
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);  // Allow the request if it's in the whitelist
        } else {
            callback(new Error('Not allowed by CORS'));  // Block the request if it's not in the whitelist
        }
    },
    credentials: true,  // Allow credentials like cookies to be sent in requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
};

// ** Use CORS with the specified options **
app.use(cors(corsOptions));  // This is where the CORS configuration is applied

main()
    .then(() => console.log('Database Connected'))
    .catch((err) => {
        console.log(`Error in connecting database: ${err}`);
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
