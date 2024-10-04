const DeliveryPartner = require('../model/deliveryPatnerSchema');

const indexRoute = async(req,res) => {
    let deliveryPartners = await DeliveryPartner.find({}).populate('badges');
    // res.status(200).json({deliveryPartners});
    res.render('deliveryPartners/listing',{deliveryPartners});
}

const newRoute = async (req,res)=> { 

    //retriving data from request body
    let partner = req.body;
   
    //creating instance of Offer model
    const newPartner = new DeliveryPartner({
        name : partner.name,
        username : partner.partner,
        password : partner.password,
        ex : { level : 1 , grade : 0},
        badges : null
    });

    //adding offer to database
    partner = await newPartner.save();
    
    res.status(200).redirect('/');

}

const newForm = (req,res) => {
    res.render('deliveryPartners/new');
}

module.exports = {indexRoute,newForm,newRoute};