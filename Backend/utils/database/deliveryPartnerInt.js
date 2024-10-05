const DB_URL = "mongodb+srv://krishpatelco22d2:HOv5zLXvqnQYQieo@cluster0.nuyp6.mongodb.net/VCETBackend";
const mongoose = require('mongoose');
const DeliveryPartner = require('../../model/deliveryPartner.js');
const Badge = require('../../model/badges.js');

async function main() {
    try {
        await mongoose.connect(DB_URL);
        console.log('Database Connected');
        await getData(); // Ensure we wait for getData to finish
    } catch (err) {
        console.log("Error in connecting database: ${err}");
    }
}

async function getData() {
    const dataSet = [
        {
            "name": "John Doe",
            "username": "johndoe123",
            "password": "hashedPassword1",
            "ex": {
                "token": 2,
                "xp": 150
            },
            "orders" : 10
        },
        {
            "name": "Alice Smith",
            "username": "alicesmith456",
            "password": "hashedPassword2",
            "ex": {
                "token": 5,
                "xp": 250
            },
        },
        {
            "name": "Bob Johnson",
            "username": "bobjohnson789",
            "password": "hashedPassword3",
            "ex": {
                "token": 3,
                "xp": 500
            },
        },
        {
            "name": "Krish Patel",
            "username": "krishpatelco22",
            "password": "hashedPassword4",
            "ex": {
                "token": 1,
                "xp": 700
            },
        },
        {
            "name": "Rahul Kumar",
            "username": "rahulkumar123",
            "password": "hashedPassword4",
            "ex": {
                "token": 10,
                "xp": 800
            },
        }

    ]

    try {
        const badges = await Badge.find({});
        console.log("Badges available: ${badges.length}"); // Log the number of available badges

        await DeliveryPartner.deleteMany(); // Clear existing delivery partners

        for (let data of dataSet) {
            // Check if badges array is not empty to avoid errors
            if (badges.length > 0) {
                // Assign a random badge
                const randomBadge = badges[Math.floor(Math.random() * badges.length)]._id;
                data['badges'] = randomBadge;
                console.log("Assigned badge ${randomBadge} to ${data.name}"); // Log assigned badge
            } else {
                console.log('No badges available to assign.');
                data['badges'] = null; // Or handle as necessary
            }

            // Create a new DeliveryPartner instance
            const newPartner = new DeliveryPartner(data);

            // Save the delivery partner and await its completion
            await newPartner.save();
            console.log("Delivery partner ${data.name} saved successfully.");
        }
    } catch (err) {
        console.error('Error while processing data:', err);
    }
}

// Start the process
main();