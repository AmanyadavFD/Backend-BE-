require("../db");
console.log("BE2.1_HW1");
const Restaurant = require("./models/restaurant.models");

const newRestaurant = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: [
    "https://example.com/somi-photo1.jpg",
    "https://example.com/somi-photo2.jpg",
  ],
};
const newRestaurant1 = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: [
    "https://example.com/yo-photo1.jpg",
    "https://example.com/yo-photo2.jpg",
    "https://example.com/yo-photo3.jpg",
  ],
};
async function seedData(newRestaurant) {
  try {
    const newRestaurantData = new Restaurant(newRestaurant);
    const saveData = await newRestaurantData.save();
    console.log("The Restaurant Saved ", newRestaurantData);
  } catch (error) {
    console.log(error);
  }
}

// seedData(newRestaurant);
// seedData(newRestaurant1);

async function getAllTheData() {
  try {
    const allRestaurant = await Restaurant.find();
    console.log(allRestaurant);
  } catch (error) {
    console.log(error);
  }
}
// getAllTheData();

async function getRestaurantByName(restaurantName) {
  try {
    const restaurantByName = await Restaurant.findOne({ name: restaurantName });
    console.log(restaurantByName);
  } catch (error) {
    console.log(error);
  }
}
// getRestaurantByName("Somi");

async function restaurantsByreservations(reservations) {
  try {
    const restaurantReser = await Restaurant.findOne({
      reservationsNeeded: reservations,
    });
    console.log("All restaurants which offers reservations", restaurantReser);
  } catch (error) {
    console.log(error);
  }
}
// restaurantsByreservations(true);

async function restaurantsByOffersDelivery(delivery) {
  try {
    const restaurantByDelivery = await Restaurant.findOne({
      isDeliveryAvailable: delivery,
    });
    console.log("all restaurants which offers delivery", restaurantByDelivery);
  } catch (error) {
    console.log(error);
  }
}
// restaurantsByOffersDelivery(true);

async function restaurantByPhoneNumber(phoneNumber) {
  try {
    const restaurantNum = await Restaurant.findOne({
      phoneNumber: phoneNumber,
    });
    console.log("Restaurant by phone number", restaurantNum);
  } catch (error) {
    console.log(error);
  }
}
// restaurantByPhoneNumber(1288997392);

async function restaurantsByCuisine(cuisine) {
  try {
    const restaurantCuisine = await Restaurant.findOne({ cuisine: cuisine });
    console.log("Read all restaurants by cuisine", restaurantCuisine);
  } catch (error) {
    console.log(error);
  }
}
// restaurantsByCuisine("Italian");

// 66d80c17c5ef368883e2172a

// Find by id and update
async function updateRestaurant(restaurantID, dataToUpdate) {
  try {
    const updatedDate = await Restaurant.findByIdAndUpdate(
      restaurantID,
      dataToUpdate,
      { new: true }
    );
    console.log("Updated The Restaurant ", updatedDate);
  } catch (error) {
    console.log(error);
  }
}
updateRestaurant("66d80c17c5ef368883e2172a", { rating: 4.1 });

async function updateRestaurantByName(restaurantName, updateToData) {
  try {
    const updatedRestaurantName = await Restaurant.findOneAndUpdate(
      { name: restaurantName },
      updateToData,
      { new: true }
    );
    console.log(updatedRestaurantName);
  } catch {
    console.log(error);
  }
}
updateRestaurantByName("Somi", { name: "Som Sarovar" });

async function updatedRestaurantDelivery(restaurantNum, updatDate) {
  try {
    const updatedDate = await Restaurant.findOneAndUpdate(
      { phoneNumber: restaurantNum },
      updatDate,
      { new: true }
    );
    console.log(updatedDate);
  } catch (error) {
    console.log(error);
  }
}
updatedRestaurantDelivery("+1288997392", { isDeliveryAvailable: true });
