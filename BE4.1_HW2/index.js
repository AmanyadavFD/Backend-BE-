const express = require("express");
const app = express();
app.use(express.json());

require("../db");
const Hotel = require("./models/hotel.models");

async function readAllHotelData() {
  try {
    const findAllHotelData = await Hotel.find();
    console.log(findAllHotelData);
    return findAllHotelData;
  } catch (error) {
    console.log(error);
  }
}
// 1. Create an API with route "/hotels" to read all hotels from
// the Database. Test your API with Postman.
app.get("/hotels", async (req, res) => {
  try {
    const hotels = await readAllHotelData();
    if (hotels.length !== 0) {
      res.json(hotels);
    } else {
      res.status(404).json({ error: "Hotel not found." });
    }
  } catch (error) {
    console.log(error);
  }
});
readAllHotelData();

async function getHotelByName(hotelName) {
  try {
    const findByHotelName = await Hotel.findOne({ name: hotelName });
    return findByHotelName;
  } catch (error) {
    console.log(error);
  }
}
// 2. Create an API with route "/hotels/:hotelName"
// to read a hotel by its name. Test your API with Postman.

app.get("/hotels/:hotelName", async (req, res) => {
  try {
    const hotelsByName = await getHotelByName(req.params.hotelName);
    if (hotelsByName) {
      res.json(hotelsByName);
    } else {
      res.status(404).json({ error: "Hotel not found." });
    }
  } catch (error) {
    console.log(error);
  }
});

async function hotelByPhoneNumber(phoneNumber) {
  try {
    const findByHotel = await Hotel.findOne({ phoneNumber: phoneNumber });
    return findByHotel;
  } catch (error) {
    console.log(error);
  }
}
// hotelByPhoneNumber("+1299655890");

// 3. Create an API with route "/hotels/directory/:phoneNumber"
// to read a hotel by phone number. Test your API with Postman.

app.get("/hotels/directory/:phoneNumber", async (req, res) => {
  try {
    const hotelByNum = await hotelByPhoneNumber(
      parseInt(req.params.phoneNumber)
    );
    if (hotelByNum) {
      res.json(hotelByNum);
    } else {
      res.status(404).json({ error: "Hotel not found." });
    }
  } catch (error) {
    console.log(error);
  }
});

// 4. Create an API with route "/hotels/rating/:hotelRating"
//  to read all hotels by rating. Test your API with Postman.
async function hotelByRating(rating) {
  try {
    const findByPrice = await Hotel.findOne({ rating: rating });
    return findByPrice;
  } catch (error) {
    console.log(error);
  }
}
// hotelByRating(4.0);
app.get("/hotels/rating/:hotelRating", async (req, res) => {
  try {
    const hotelsRating = await hotelByRating(req.params.hotelRating);
    if (hotelsRating) {
      res.json(hotelsRating);
    } else {
      res.status(404).json({ error: "Hotel not found." });
    }
  } catch (error) {
    console.log(error);
  }
});
async function hotelsByCategory(category) {
  try {
    const findByCategory = await Hotel.find({ category: category });
    return findByCategory;
  } catch (error) {
    console.log(error);
  }
}
app.get("/hotels/category/:hotelCategory", async (req, res) => {
  try {
    const hotelsCatego = await hotelsByCategory(req.params.hotelCategory);
    if (hotelsCatego.length != 0) {
      res.json(hotelsCatego);
    } else {
      res.status(404).json({ error: "Hotel not found." });
    }
  } catch (error) {
    console.log(error);
  }
});
// hotelsByCategory("Mid-Range");

// 5. Create an API with route "/hotels/category/:hotelCategory"
//  to read all hotels by category. Test your API with Postman.

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
