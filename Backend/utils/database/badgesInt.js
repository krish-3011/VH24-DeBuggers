const DB_URL = "mongodb://localhost:27017/VCET_Hack24";
const mongoose = require('mongoose');
const Badge = require('../../model/badgesSchema.js')


async function main(){
    await mongoose.connect(DB_URL);
    getData();
}

main().then(console.log('Database Connected')).catch((err)=>{console.log(`error in connecting database ${err}`)});

function getData(){
    const dataSet = [
        {
          "name": "Top Performer"
        },
        {
          "name": "Best Newcomer"
        },
        {
          "name": "Customer Favorite"
        },
        {
          "name": "Most Reliable"
        },
        {
          "name": "Excellent Service"
        },
        {
          "name": "Team Player"
        }
      ];

    let newBadge;

      for(data of dataSet){
        newBadge = new Badge(data);
        newBadge.save().then(() => {console.log('done')}).catch((err) => {console.log(`${err}`)});
      }
}