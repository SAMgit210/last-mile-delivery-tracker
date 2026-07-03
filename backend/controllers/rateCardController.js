const RateCard = require("../models/RateCard");

// CREATE RATE CARD
const createRateCard = async (req,res)=>{

    try{

        const rateCard =
        await RateCard.create(req.body);

        res.status(201).json(rateCard);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};

// GET ALL RATE CARDS
const getRateCards = async (req,res)=>{

    try{

        const rateCards =
        await RateCard.find();

        res.status(200).json(rateCards);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};

module.exports = {
    createRateCard,
    getRateCards
};