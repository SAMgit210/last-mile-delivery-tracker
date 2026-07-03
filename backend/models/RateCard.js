const mongoose = require("mongoose");

const rateCardSchema = new mongoose.Schema(
{
    orderType:{
        type:String,
        enum:["B2B","B2C"]
    },

    fromZone:String,

    toZone:String,

    ratePerKg:Number,

    codCharge:Number
},
{timestamps:true}
);

module.exports = mongoose.model("RateCard",rateCardSchema);