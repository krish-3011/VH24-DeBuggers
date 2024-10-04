const DB_URL = "mongodb://localhost:27017/VCET_Hack24";
const mongoose = require('mongoose');
const Restaurant = require('../../model/restaurantSchema.js');
const Customer = require('../../model/customerSchema.js');
const DeliveryPartner = require('../../model/deliveryPatnerSchema.js');



async function main(){
    await mongoose.connect(DB_URL);
    getData();
}

main().then(console.log('Database Connected')).catch((err)=>{console.log(`error in connecting database ${err}`)});

async function getData(){
    const dataSet = [
        {
          "orderValue": 25.99,
          "rating": 5
        },
        {
         
          "orderValue": 15.50,
          "rating": 4
        },
        {
          "orderValue": 30.00,
          "rating": 3
        },
        {
         
          "orderValue": 50.75,
          "rating": 5
        },
        {
         
          "orderValue": 22.99,
          "rating": 4
        }
      ]
      let customers = await Customer.find({});
      let restaurantes = await Restaurant.find({});
      let deliveryPartneres = await DeliveryPartner.find({});
    let newRestaurant;

      for(data of dataSet){
        data['customerId'] = customers[Math.floor(Math.random() * customers.length)]._id;
        data['deliveryPartnerID'] = deliveryPartneres[Math.floor(Math.random() * deliveryPartneres.length)]._id;
        data['restaurantId'] = restaurantes[Math.floor(Math.random() * restaurantes.length)]._id;
        newRestaurant = new Restaurant(data);
        newRestaurant.save().then(() => {console.log('done')}).catch((err) => {console.log(`${err}`)});
      }
}
