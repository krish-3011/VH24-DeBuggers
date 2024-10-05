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
require('dotenv').config();

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL
const SECURE_CODE = process.env.SECURE_CODE

//connectin to database
async function main(){
    await mongoose.connect(DB_URL);
    
}

main().then(console.log('Database Connected')).catch((err)=>{console.log(`error in connecting database ${err}`)})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "/public")));
app.use(flash());

//set up session
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

//routes
app.use('/deliveryPartner',deliveryPartner)
app.use('/restaurant',restaurant)

app.listen(PORT,()=>{
    console.log(`Server is listng on port ${PORT}`);
});