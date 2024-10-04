const DB_URL = "mongodb://localhost:27017/VCET_Hack24";
const mongoose = require('mongoose');
const Restaurant = require('../../model/restaurantSchema.js')


async function main(){
    await mongoose.connect(DB_URL);
    getData();
}

main().then(console.log('Database Connected')).catch((err)=>{console.log(`error in connecting database ${err}`)});

function getData(){
    const dataSet =  [
        {
          "name": "Pasta Palace",
          "password": "securePassword1",
          "address": "123 Noodle Lane, Pasta City, CA"
        },
        {
          "name": "Burger Haven",
          "password": "securePassword2",
          "address": "456 Burger Blvd, Meat Town, TX"
        },
        {
          "name": "Sushi Spot",
          "password": "securePassword3",
          "address": "789 Sushi Street, Fishville, NY"
        },
        {
          "name": "Taco Town",
          "password": "securePassword4",
          "address": "321 Taco Way, Salsa City, FL"
        },
        {
          "name": "BBQ Barn",
          "password": "securePassword5",
          "address": "654 Grill Ave, Smoke Town, TX"
        }
      ]

    let newRestaurant;

      for(data of dataSet){
        newRestaurant = new Restaurant(data);
        newRestaurant.save().then(() => {console.log('done')}).catch((err) => {console.log(`${err}`)});
      }
}
