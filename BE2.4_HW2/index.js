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

async function deleteHotelById(hotelID) {
  try {
    const deleteById = await Hotel.findByIdAndDelete(hotelID);
    console.log("Delete the hotel by ID:", deleteById);
  } catch (error) {
    console.log("Error in Deleting Hotel ", error);
  }
}

deleteHotelById("66dadd175f82b4b79dea9094");

async function deleteHotelByPhoneNumber(hotelNum) {
  try {
    const deleteByNum = await Hotel.findOneAndDelete({ phoneNumber: hotelNum });
    console.log("Deleted the hotel by number :", deleteByNum);
  } catch (error) {
    console.log(error);
  }
}
deleteHotelByPhoneNumber("+1234555890");
