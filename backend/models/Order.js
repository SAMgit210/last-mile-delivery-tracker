const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    pickupAddress: String,

    dropAddress: String,

    pickupZone: String,

    dropZone: String,

    actualWeight: Number,

    volumetricWeight: Number,

    charge: Number,

    paymentType: {
      type: String,
      enum: ["Prepaid", "COD"],
    },

    orderType: {
      type: String,
      enum: ["B2B", "B2C"],
    },

    assignedAgent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      default: "Pending",
    },

    trackingHistory: [
      {
        status: String,
        actor: String,
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);