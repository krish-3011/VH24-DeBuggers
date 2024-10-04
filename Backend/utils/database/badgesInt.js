const DB_URL = "mongodb+srv://krishpatelco22d2:HOv5zLXvqnQYQieo@cluster0.nuyp6.mongodb.net/VCETBackend";
const mongoose = require('mongoose');
const Badge = require('../../model/badges.js');


async function main(){
    await mongoose.connect(DB_URL);
    getData();
}

main().then(console.log('Database Connected')).catch((err)=>{console.log(`error in connecting database ${err}`)});

async function getData(){
    const dataSet = [
        {
            "name": "Speed Demon"
        },
        {
            "name": "Fuel Saver"
        },
        {
            "name": "Route Master"
        },
        {
            "name": "Early Bird"
        },
        {
            "name": "Customer Favorite"
        },
        {
            "name": "Top Performer"
        },
        {
            "name": "Efficiency Expert"
        },
        {
            "name": "High Flyer"
        },
        {
            "name": "Dependable"
        },
        {
            "name": "Legendary Status"
        }
    ];

    let newBadge;
        await Badge.deleteMany();
      for(data of dataSet){
        newBadge = new Badge(data);
        newBadge.save().then(() => {console.log('done')}).catch((err) => {console.log(`${err}`)});
      }
}