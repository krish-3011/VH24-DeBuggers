const DB_URL = "mongodb://localhost:27017/VCET_Hack24";
const mongoose = require('mongoose');
const Customer = require('../../model/customer.js')


async function main(){
    await mongoose.connect(DB_URL);
    getData();
}

main().then(console.log('Database Connected')).catch((err)=>{console.log(`error in connecting database ${err}`)});

function getData(){
    const dataSet =  [
      {
          "name": "John Doe",
          "username": "johndoe123",
          "password": "john@123",
          "address": [
              "123 Main Street, Springfield, IL",
              "456 Oak Street, Springfield, IL"
          ]
      },
      {
          "name": "Alice Johnson",
          "username": "alice_j",
          "password": "alice@456",
          "address": [
              "789 Birch Lane, Boston, MA"
          ]
      },
      {
          "name": "Michael Smith",
          "username": "mike_smith",
          "password": "mike@789",
          "address": [
              "321 Pine Avenue, Denver, CO",
              "654 Elm Street, Denver, CO"
          ]
      },
      {
          "name": "Sara Williams",
          "username": "sara_w",
          "password": "sara@101",
          "address": [
              "987 Maple Street, Austin, TX"
          ]
      }
  ]

    let newCus;

      for(data of dataSet){
        newCus = new Customer(data);
        newCus.save().then(() => {console.log('done')}).catch((err) => {console.log(`${err}`)});
      }
}
