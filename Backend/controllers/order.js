const Order = require('../model/order.js');
const Customer = require('../model/customer.js');
const DeliveryPartner = require('../model/deliveryPartner.js');
const Restaurant = require('../model/restaurant.js');

const newRoute = async (req, res) => {
    let order = req.body;
    console.log(order)
    order.rating = Number(order.rating);
    order.distance = Number(order.distance);

    let customer = await Customer.findOne({ name: order.c_name });
    let restaurant = await Restaurant.findOne({ name: order.r_name });
    let deliveryPartner = await DeliveryPartner.findOne({ name: order.dp_name });

    if (!customer || !restaurant || !deliveryPartner) {
        let err = new Error("Invalid Detail...");
        err.status = 400;
        throw err;
    }

    let newOrder = new Order({
        customerId: customer._id,
        restaurantId: restaurant._id,
        deliveryPartnerId: deliveryPartner._id,
        orderValue: order.orderValue,
        rating: order.rating,
        time:{et:order.et , dt:order.dt}, // Ensure these are converted to numbers
        distance: order.distance
    });

    // Fuel efficiency calculation (assuming 30 is a constant value for efficiency)
    let reward = [(order.distance / 30) + (1 + Number(order.et) / Number(order.dt))] * 5;
    let updated =await DeliveryPartner.findByIdAndUpdate(deliveryPartner._id,{$inc:{'ex.grade':reward}} , {new:true})
    console.log(updated);
    try {
        let result = await newOrder.save();
        res.status(200).send({ message: "New order saved", result });
    } catch (err) {
        res.status(404).send({ message: "New order is not saved", error: err.message });
    }
};

const newForm = (req,res) => { 
    res.render('order/new');
}

module.exports = {newRoute , newForm};