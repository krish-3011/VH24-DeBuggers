const DB_URL = "mongodb://localhost:27017/VCET_Hack24";
const mongoose = require('mongoose');
const Badge = require('../../model/badges.js')


async function main(){
    await mongoose.connect(DB_URL);
    getData();
}

main().then(console.log('Database Connected')).catch((err)=>{console.log(`error in connecting database ${err}`)});

function getData(){
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

      for(data of dataSet){
        newBadge = new Badge(data);
        newBadge.save().then(() => {console.log('done')}).catch((err) => {console.log(`${err}`)});
      }
}