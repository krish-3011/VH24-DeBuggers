const DB_URL = "mongodb://localhost:27017/VCET_Hack24";
const mongoose = require('mongoose');
const Restaurant = require('../../model/restaurant.js');
const Customer = require('../../model/customer.js');
const DeliveryPartner = require('../../model/deliveryPartner.js');
const Order = require('../../model//order.js')



async function main(){
    await mongoose.connect(DB_URL);
    getData();
}

main().then(console.log('Database Connected')).catch((err)=>{console.log(`error in connecting database ${err}`)});

async function getData(){
    const dataSet = [
      {
          "orderValue": 45.75,
          "rating": 4.5,
          "time": {
              "et": "2024-09-15T12:30:00Z",
              "dt": "2024-09-15T13:00:00Z"
          }
          
      },
      {
          "orderValue": 27.30,
          "rating": 3.8,
          "time": {
              "et": "2024-09-16T14:15:00Z",
              "dt": "2024-09-16T14:50:00Z"
          }
      },
      {
          "orderValue": 18.90,
          "rating": 5,
          "time": {
              "et": "2024-09-17T17:00:00Z",
              "dt": "2024-09-17T17:30:00Z"
          }
      },
      {
          "orderValue": 32.50,
          "rating": 4,
          "time": {
              "et": "2024-09-18T10:00:00Z",
              "dt": "2024-09-18T10:30:00Z"
          }
      }
  ]
      let customers = await Customer.find({});
      let restaurantes = await Restaurant.find({});
      let deliveryPartneres = await DeliveryPartner.find({});
    let newRestaurant;
    await Order.deleteMany();
      for(data of dataSet){
        data['customerId'] = customers[Math.floor(Math.random() * customers.length)]._id;
        data['deliveryPartnerID'] = deliveryPartneres[Math.floor(Math.random() * deliveryPartneres.length)]._id;
        data['restaurantId'] = restaurantes[Math.floor(Math.random() * restaurantes.length)]._id;
        newOrder = new Order(data);
        newOrder.save().then(() => {console.log('done')}).catch((err) => {console.log(`${err}`)});
      }
}
