const Zone = require("../models/Zone");

// CREATE ZONE
const createZone = async (req,res)=>{

    try{

        const {zoneName,pincodes} = req.body;

        const zone = await Zone.create({
            zoneName,
            pincodes
        });

        res.status(201).json(zone);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};

// GET ALL ZONES
const getZones = async (req,res)=>{

    try{

        const zones = await Zone.find();

        res.status(200).json(zones);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};

module.exports = {
    createZone,
    getZones
};