const mongoose = require("mongoose");
const creditCardScheme = new mongoose.Schema({
  cardNumber: Number,
  cardHolderName: String,
  expirationDate: Date,
  issuingBank: String,
  cardType: String,
});

const Card = mongoose.model("Card", creditCardScheme);
module.exports = Card;
