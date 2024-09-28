const mongoose = require("mongoose");
const fruitSchema = new mongoose.Schema({
  name: String,
  descriotion: String,
  calories: String,
  carbohydrates: String,
  protein: String,
  fat: String,
});
const Fruit = mongoose.model("Fruit", fruitSchema);
module.exports = Fruit;
