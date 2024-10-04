const { findByIdAndDelete } = require('../model/badges.js');
const Restaurant = require('../model/restaurant.js');
const passport = require('passport'); 
require('../utils/passport-config.js')(passport);

const indexRoute = async(req,res) => {
    let restaurants = await Restaurant.find({});
    res.status(200).json({restaurants});
    // res.render('restaurant/listing',{restaurants});
}

const newRoute = async (req,res)=> { 

    //retriving data from request body
    let restaurant = req.body;
   
    //creating instance of Offer model
    const newRestaurant = new Restaurant({
        name : restaurant.name,
        username : restaurant.username,
        password : restaurant.password,
        address : restaurant.address,
        menu : []
    });

    //adding offer to database
    restaurant = await newRestaurant.save();
    
    // res.status(200).redirect('/restaurant');
    res.status(200).json({message : "new restaurant saved"});


}

const showRoute =async (req,res)=>{
    let {id} = req.params;

    let restaurant = await Restaurant.findById(id);
     if(!restaurant){
        let err = new Error("restaurant not exsist")
        err.status = 400
        throw err;
    }

    //sending offer
    // res.render('restaurant/show', {restaurant});
    res.status(200).json(restaurant);

}

const updateRoute = async (req,res)=> { 

    //retriving data from request body
    let restaurant = req.body;
    let {id} = req.params;
    const oldRestaurant =await Restaurant.findById(id);

    if(!oldRestaurant){
        let err = new Error("Restaurant not found...")
        err.status = 400
        throw err;
    }
    //creating instance of Offer model
    const newRestaurant = Restaurant.findByIdAndUpdate(id,{$set:{
        name : restaurant.name,
        username : restaurant.username,
        password : restaurant.password,
        address : restaurant.address,
        menu : oldRestaurant.menu
    }
    },{new:true}).then(console.log('Restaurant updated')).catch(err => {console.log(`not updated ${err}`)});
    
    // res.status(200).redirect('/restaurant');
    res.status(200).json({message : "Data updated successfully "});


}

const newForm = (req,res) => {
    res.render('restaurant/new');
}
const updateForm = async (req,res) => {
    let {id} = req.params;
    let restaurant = await Restaurant.findById(id)
    res.render('restaurant/update',restaurant);
}

const deleteRoute = async (req,res) =>{
    let {id} = req.params;
    let restaurant = await Restaurant.findByIdAndDelete(id);

    // res.status(200).redirect('/restaurant');
    res.status(200).json({message : "restaurant deleted sucessfully"});
} 


const loginForm = async(req,res) => {
    res.render('restaurant/loginForm')
}

module.exports = {indexRoute,newForm,newRoute,showRoute,updateForm,updateRoute,deleteRoute,loginForm};