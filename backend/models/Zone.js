const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema(
  {
    zoneName: {
      type: String,
      required: true,
    },

    pincodes: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Zone", zoneSchema);