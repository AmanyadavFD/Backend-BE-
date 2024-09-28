require("../db");
const Hotel = require("./models/hotel.models");

const newHotel = {
  name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: [
    "https://example.com/hotel1-photo1.jpg",
    "https://example.com/hotel1-photo2.jpg",
  ],
};
const newHotel2 = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: [
    "Room Service",
    "Horse riding",
    "Boating",
    "Kids Play Area",
    "Bar",
  ],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel2-photo1.jpg",
    "https://example.com/hotel2-photo2.jpg",
  ],
};
async function createHotel(hotel) {
  try {
    const hotelData = new Hotel(hotel);
    const saveHotelData = await hotelData.save();
    console.log(saveHotelData);
  } catch (error) {
    console.log(error);
  }
}
// createHotel(newHotel);
// createHotel(newHotel2);

async function readAllHotelData() {
  try {
    const findAllHotelData = await Hotel.find();
    console.log(findAllHotelData);
  } catch (error) {
    console.log(error);
  }
}
// readAllHotelData();

async function getHotelByName(hotelName) {
  try {
    const findByHotelName = await Hotel.findOne({ name: hotelName });
    console.log("read a hotel by its name", findByHotelName);
  } catch (error) {
    console.log(error);
  }
}
// getHotelByName("Lake View");

async function getHotelsByOfferByParking(isParkingAvailable) {
  try {
    const parkingByHotel = await Hotel.findOne({
      isParkingAvailable: isParkingAvailable,
    });
    console.log("All hotels which offers parking space", parkingByHotel);
  } catch (error) {
    console.log(error);
  }
}
// getHotelsByOfferByParking(true);
async function restaurantAvailable(available) {
  try {
    const getHotelByAvailable = await Hotel.findOne({
      isRestaurantAvailable: available,
    });
    console.log(
      "All hotels which has restaurant available",
      getHotelByAvailable
    );
  } catch (error) {
    console.log(error);
  }
}
// restaurantAvailable(true);

async function hotelsByCategory(category) {
  try {
    const findByCategory = await Hotel.find({ category: category });
    console.log("All hotels by category ", findByCategory);
  } catch (error) {
    console.log(error);
  }
}
// hotelsByCategory("Mid-Range");

async function hotelByPrice(priceRange) {
  try {
    const findByPrice = await Hotel.find({ priceRange: priceRange });
    console.log("Read all hotels by price range", findByPrice);
  } catch (error) {
    console.log(error);
  }
}
// hotelByPrice("$$$$ (61+)");

async function hotelByRating(rating) {
  try {
    const findByPrice = await Hotel.findOne({ rating: rating });
    console.log("Read all hotels with 4.0 rating", findByPrice);
  } catch (error) {
    console.log(error);
  }
}
hotelByRating(4.0);

async function hotelByPhoneNumber(phoneNumber) {
  try {
    const findByHotel = await Hotel.findOne({ phoneNumber: phoneNumber });
    console.log("Read a hotel by phone number ", findByHotel);
  } catch (error) {
    console.log(error);
  }
}
hotelByPhoneNumber("+1299655890");
