const express = require("express");
const app = express();
app.use(express.json());

require("../db");
console.log("BE2.1_HW1");
const Restaurant = require("./models/restaurant.models");

async function getAllTheData() {
  try {
    const allRestaurant = await Restaurant.find();
    return allRestaurant;
  } catch (error) {
    console.log(error);
  }
}
// getAllTheData();

// 1. Create an API with route "/restaurants" to read all
// restaurants from the Database. Test your API with Postman.
app.get("/restaurants", async (req, res) => {
  try {
    const restaurant = await getAllTheData();
    if (restaurant.length != 0) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: "Restaurants not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

async function getRestaurantByName(restaurantName) {
  try {
    const restaurantByName = await Restaurant.findOne({ name: restaurantName });
    return restaurantByName;
  } catch (error) {
    console.log(error);
  }
}
// 2. Create an API with route "/restaurants/:restaurantName"
//  to read a restaurant by its name. Test your API with Postman.
app.get("/restaurants/restaurantName/:name", async (req, res) => {
  try {
    const restaurant = await getRestaurantByName(req.params.name);
    if (restaurant.length != 0) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

async function restaurantByPhoneNumber(phoneNumber) {
  try {
    const restaurantNum = await Restaurant.findOne({
      phoneNumber: phoneNumber,
    });
    return restaurantNum;
    // console.log("Restaurant by phone number", restaurantNum);
  } catch (error) {
    console.log(error);
  }
}
// restaurantByPhoneNumber(1288997392);

// 3. Create an API with route "/restaurants/directory/:phoneNumber"
//  to read a restaurant by phone number. Test your API with Postman.

app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
  try {
    const phoneNumber = parseInt(req.params.phoneNumber);
    const restaurant = await restaurantByPhoneNumber(phoneNumber);
    if (restaurant) {
      // Check if restaurant exists
      res.json(restaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurant" });
  }
});

async function restaurantsByCuisine(cuisine) {
  try {
    const restaurantCuisine = await Restaurant.findOne({ cuisine: cuisine });
    // console.log("Read all restaurants by cuisine", restaurantCuisine);
    return restaurantCuisine;
  } catch (error) {
    console.log(error);
  }
}
// restaurantsByCuisine("Italian");

app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
  try {
    const restaurantByCuisine = await restaurantsByCuisine(
      req.params.cuisineName
    );
    if (restaurantByCuisine) {
      res.json(restaurantByCuisine);
    } else {
      res.status(404).json({ error: "Restaurant not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurant" });
  }
});

// 5. Create an API with route "/restaurants/location/:restaurantLocation"
//  to read all restaurants by location. Test your API with Postman.

async function restaurantsByLocation(location) {
  try {
    const restaurantLocation = await Restaurant.findOne({ location: location });
    // console.log("Read all location by cuisine", restaurantLocation);
    return restaurantLocation;
    return restaurantLocation;
  } catch (error) {
    console.log(error);
  }
}

app.get("/restaurants/location/:restaurantLocation", async (req, res) => {
  try {
    const restaurantLocation = await restaurantsByLocation(
      req.params.restaurantLocation
    );
    if (restaurantLocation) {
      res.json(restaurantLocation);
    } else {
      res.status(404).json({ error: "Restaurant not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurant" });
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
