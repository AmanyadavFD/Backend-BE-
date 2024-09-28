require("../db");
// console.log("BE2.1_HW2");
const Hotel = require("./models/hotel.models");
const newHotel = {
  name: "New Hotel",
  category: "Mid-Range",
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  reviews: [],
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel-photo1.jpg",
    "https://example.com/hotel-photo2.jpg",
  ],
};

async function hotelData(newHotel) {
  try {
    const newHotelData = new Hotel(newHotel);
    const saveHotelData = await newHotelData.save();
    console.log("New Hotel Data ", saveHotelData);
  } catch (error) {
    console.log(error);
  }
}
hotelData(newHotel);
