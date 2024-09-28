const express = require("express");
const app = express();
app.use(express.json());

require("../db");
const Hotel = require("./models/hotel.models");

async function createHotel(hotel) {
  try {
    const hotelData = new Hotel(hotel);
    const saveHotelData = await hotelData.save();
    return saveHotelData;
  } catch (error) {
    console.log(error);
  }
}

app.post("/hotels", async (req, res) => {
  try {
    const addHotel = await createHotel(req.body);
    res
      .status(201)
      .json({ message: "Hotel added Successfully.", hotel: addHotel });
  } catch (error) {
    res.status(500).json({ error: "Failed to add hotel" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
