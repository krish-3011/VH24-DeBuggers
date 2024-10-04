const { findByIdAndDelete } = require('../model/badges.js');
const DeliveryPartner = require('../model/deliveryPartner.js');
const passport = require('passport'); 
require('../utils/passport-config.js')(passport);

const indexRoute = async(req,res) => {
    let deliveryPartners = await DeliveryPartner.find({}).populate('badges');
    res.status(200).json({deliveryPartners});
    // res.render('deliveryPartners/listing',{deliveryPartners});
}

const newRoute = async (req,res)=> { 

    //retriving data from request body
    let partner = req.body;
   
    //creating instance of Offer model
    const newPartner = new DeliveryPartner({
        name : partner.name,
        username : partner.username,
        password : partner.password,
        ex : { level : 1 , grade : 0},
        badges : null
    });

    //adding offer to database
    partner = await newPartner.save();
    
    // res.status(200).redirect('/deliveryPartner');
    res.status(200).json({message : "new user saved"});

}

const showRoute =async (req,res)=>{
    let {id} = req.params;

    let partner = await DeliveryPartner.findById(id);
    // res.render('deliveryPartners/show', {partner});
    if(!partner){
        let err = new Error("User not exsist")
        err.status = 400
        throw err;
    }

    //sending offer
    res.status(200).json(partner);

}

const updateRoute = async (req,res)=> { 

    //retriving data from request body
    let partner = req.body;
    let {id} = req.params;
    const oldPartner =await DeliveryPartner.findById(id);

    if(!oldPartner){
        let err = new Error("Partner not found...")
        err.status = 400
        throw err;
    }
    //creating instance of Offer model
    const newPartner = DeliveryPartner.findByIdAndUpdate(id,{$set:{
        name : partner.name,
        username : partner.username,
        password : partner.password,
        ex : { level : oldPartner.ex.level , grade : oldPartner.ex.grade},
        badges : oldPartner.badges
    }
    },{new:true}).then(console.log('partner updated')).catch(err => {console.log(`not updated ${err}`)});
    
    // res.status(200).redirect('/deliveryPartner');
    res.status(200).json({message : "Data updated successfully "});

}

const newForm = (req,res) => {
    res.render('deliveryPartners/new');
}
const updateForm = async (req,res) => {
    let {id} = req.params;
    let deliveryPartner = await DeliveryPartner.findById(id)
    res.render('deliveryPartners/update',deliveryPartner);
}

const deleteRoute = async (req,res) =>{
    let {id} = req.params;
    let partner = await DeliveryPartner.findByIdAndDelete(id);

    // res.status(200).redirect('/deliveryPartner');
    res.status(200).json({message : "User deleted sucessfully"});

} 

const loginForm = async(req,res) => {
    res.render('deliveryPartners/loginForm')
}

module.exports = {indexRoute,newForm,newRoute,updateForm,updateRoute,deleteRoute,loginForm,showRoute};