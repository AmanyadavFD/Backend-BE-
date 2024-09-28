const express = require("express");
const app = express();
app.use(express.json());

require("../db");
console.log("BE2.1_HW1");
const Restaurant = require("./models/restaurant.models");

async function seedData(newRestaurant) {
  try {
    const newRestaurantData = new Restaurant(newRestaurant);
    const saveData = await newRestaurantData.save();
    return saveData;
  } catch (error) {
    console.log(error);
  }
}
app.post("/restaurants", async (req, res) => {
  try {
    const savedData = await seedData(req.body);
    res.status(201).json({
      message: "Restaurant added Successfully.",
      restaurant: savedData,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to add movie" });
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
