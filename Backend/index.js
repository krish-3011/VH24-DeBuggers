const express = require('express');
const app = express();
const PORT = 8080;
const DB_URL = "mongodb://localhost:27017/VCET_Hack24";
const mongoose = require('mongoose');
const deliveryPartner = require('./routes/dileveryPatner.js');
const methodOverride = require('method-override');
const path = require('path');

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

//routes
app.use('/deliveryPartner',deliveryPartner)

app.listen(PORT,()=>{
    console.log(`Server is listng on port ${PORT}`);
});
