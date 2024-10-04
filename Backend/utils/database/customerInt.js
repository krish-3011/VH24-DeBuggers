const DB_URL = "mongodb://localhost:27017/VCET_Hack24";
const mongoose = require('mongoose');
const Customer = require('../../model/customerSchema.js')


async function main(){
    await mongoose.connect(DB_URL);
    getData();
}

main().then(console.log('Database Connected')).catch((err)=>{console.log(`error in connecting database ${err}`)});

function getData(){
    const dataSet =  [
        {
          "name": "Alice Johnson",
          "username": "alice_j",
          "password": "securePassword1",
          "address": "123 Maple Street, Springfield, IL"
        },
        {
          "name": "Bob Smith",
          "username": "bob_smith",
          "password": "securePassword2",
          "address": "456 Oak Avenue, Metropolis, NY"
        },
        {
          "name": "Charlie Brown",
          "username": "charlie_b",
          "password": "securePassword3",
          "address": "789 Pine Road, Gotham, NJ"
        },
        {
          "name": "Diana Prince",
          "username": "diana_p",
          "password": "securePassword4",
          "address": "321 Birch Boulevard, Themyscira, WA"
        },
        {
          "name": "Ethan Hunt",
          "username": "ethan_h",
          "password": "securePassword5",
          "address": "654 Cedar Lane, Los Angeles, CA"
        }
      ]

    let newCus;

      for(data of dataSet){
        newCus = new Customer(data);
        newCus.save().then(() => {console.log('done')}).catch((err) => {console.log(`${err}`)});
      }
}
