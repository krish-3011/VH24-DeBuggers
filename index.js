const express = require('express');
const app = express();
const PORT = 8080;
const DB_URL = "mongodb://localhost:27017//VCET_Hack24";
const mongoose = require('mongoose');


//connectin to database
async function main(){
    await mongoose.connect(DB_URL);
}

main().then(console.log('Database Connected')).catch((err)=>{console.log(`error in connecting database ${err}`)})

app.get('/',()=>{
    console.log('done');
});

app.listen(PORT,()=>{
    console.log(`Server is listng on port ${PORT}`);
});
