const mongoose = require("mongoose");
const productCardSchema = new mongoose.Schema({
  productName: String,
  productImgUrl: String,
  description: String,
  typeOfProduct: String,
  color: [
    {
      type: [String],
    },
  ],
  sizes: [
    {
      type: [String],
    },
  ],
  price: String,
});

const ProductCard = mongoose.model("ProductCard", productCardSchema);
module.exports = ProductCard;
