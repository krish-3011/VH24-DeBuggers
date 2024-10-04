const DB_URL = "mongodb://localhost:27017/VCET_Hack24";
const mongoose = require('mongoose');
const Restaurant = require('../../model/restaurant.js')


async function main(){
    await mongoose.connect(DB_URL);
    getData();
}

main().then(console.log('Database Connected')).catch((err)=>{console.log(`error in connecting database ${err}`)});

async function getData(){
    const dataSet =  [
      {
          "name": "The Gourmet Kitchen",
          "username": "gourmet_kitchen",
          "password": "gourmet@123",
          "address": "12 Baker Street, New York, NY",
          "menu": [
              {
                  "itemName": "Grilled Chicken Sandwich",
                  "price": 8.99
              },
              {
                  "itemName": "Caesar Salad",
                  "price": 5.49
              },
              {
                  "itemName": "Margherita Pizza",
                  "price": 12.50
              }
          ]
      },
      {
          "name": "Pasta Palace",
          "username": "pasta_palace",
          "password": "pasta@456",
          "address": "22 Broadway Avenue, Boston, MA",
          "menu": [
              {
                  "itemName": "Spaghetti Bolognese",
                  "price": 10.99
              },
              {
                  "itemName": "Fettuccine Alfredo",
                  "price": 9.99
              },
              {
                  "itemName": "Lasagna",
                  "price": 11.50
              }
          ]
      },
      {
          "name": "Sushi World",
          "username": "sushi_world",
          "password": "sushi@789",
          "address": "50 Sushi Street, Los Angeles, CA",
          "menu": [
              {
                  "itemName": "California Roll",
                  "price": 7.99
              },
              {
                  "itemName": "Spicy Tuna Roll",
                  "price": 9.50
              },
              {
                  "itemName": "Tempura Udon",
                  "price": 12.00
              }
          ]
      },
      {
          "name": "Burger Barn",
          "username": "burger_barn",
          "password": "burger@101",
          "address": "75 BBQ Drive, Austin, TX",
          "menu": [
              {
                  "itemName": "Classic Cheeseburger",
                  "price": 6.49
              },
              {
                  "itemName": "Bacon BBQ Burger",
                  "price": 7.99
              },
              {
                  "itemName": "Veggie Burger",
                  "price": 6.99
              }
          ]
      }
  ];

    let newRestaurant;
    await Restaurant.deleteMany(); 
      for(data of dataSet){
        newRestaurant = new Restaurant(data);
        newRestaurant.save().then(() => {console.log('done')}).catch((err) => {console.log(`${err}`)});
      }
}
