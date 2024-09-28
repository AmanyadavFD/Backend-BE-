const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  reviews: String,
  price: Number,
  description: String,
  availability: String,
  features: {
    type: [String],
  },
  discount: String,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
