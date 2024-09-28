const mongoose = require("mongoose");
const smartphoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: String,
      required: true,
    },
    operatingSystem: [
      {
        type: [String],
        enum: ["iOS", "Android", "Windows", "Other"],
      },
    ],
    displaySize: {
      type: String,
    },
    storage: {
      type: String,
    },
    ram: {
      type: String,
    },
    cameraSpecs: {
      megapixel: {
        type: Number,
      },
      lensType: {
        type: String,
      },
      features: [String],
    },
    batteryCapacity: {
      type: String,
    },
    connectivity: [
      {
        type: [String],
        enum: ["4G LTE", "5G", "Wi-Fi", "Bluetooth", "NFC", "Other"],
      },
    ],
    price: {
      type: Number,
    },
    colorsAvailable: {
      type: [String],
    },
    features: {
      type: [String],
    },
  },
  { timestamps: true }
);
const Smartphone = mongoose.model("Smartphone", smartphoneSchema);
module.exports = Smartphone;
