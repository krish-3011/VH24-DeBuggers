const DB_URL = "mongodb://localhost:27017/VCET_Hack24";
const mongoose = require('mongoose');
const DeliveryPartner = require('../../model/deliveryPatnerSchema.js');
const Badge = require('../../model/badgesSchema.js');

async function main() {
    try {
        await mongoose.connect(DB_URL);
        console.log('Database Connected');
        await getData(); // Ensure we wait for getData to finish
    } catch (err) {
        console.log(`Error in connecting database: ${err}`);
    }
}

async function getData() {
    const dataSet = [
        {
            "name": "John Doe",
            "username": "john_doe",
            "password": "securePassword123",
            "ex": {
                "level": 5,
                "grade": 2
            },
        },
        {
            "name": "Jane Smith",
            "username": "jane_smith",
            "password": "anotherSecurePassword456",
            "ex": {
                "level": 3,
                "grade": 1
            },
        },
        {
            "name": "Alice Johnson",
            "username": "alice_j",
            "password": "alicePass789",
            "ex": {
                "level": 4,
                "grade": 3
            },
        },
        {
            "name": "Bob Brown",
            "username": "bob_brown",
            "password": "bobSecure123",
            "ex": {
                "level": 2,
                "grade": 1
            },
        },
        {
            "name": "Charlie Green",
            "username": "charlie_g",
            "password": "charliePass456",
            "ex": {
                "level": 1,
                "grade": 1
            },
        }
    ];

    try {
        const badges = await Badge.find({});
        console.log(`Badges available: ${badges.length}`); // Log the number of available badges

        await DeliveryPartner.deleteMany({}); // Clear existing delivery partners

        for (let data of dataSet) {
            // Check if badges array is not empty to avoid errors
            if (badges.length > 0) {
                // Assign a random badge
                const randomBadge = badges[Math.floor(Math.random() * badges.length)]._id;
                data['badges'] = randomBadge;
                console.log(`Assigned badge ${randomBadge} to ${data.name}`); // Log assigned badge
            } else {
                console.log('No badges available to assign.');
                data['badges'] = null; // Or handle as necessary
            }

            // Create a new DeliveryPartner instance
            const newPartner = new DeliveryPartner(data);

            // Save the delivery partner and await its completion
            await newPartner.save();
            console.log(`Delivery partner ${data.name} saved successfully.`);
        }
    } catch (err) {
        console.error('Error while processing data:', err);
    }
}

// Start the process
main();
