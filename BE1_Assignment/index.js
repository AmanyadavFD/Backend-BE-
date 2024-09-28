require("../db");
const fs = require("fs");
const Car = require("./models/car.models");
const jsonData = fs.readFileSync("cars.json", "utf-8");
const carData = JSON.parse(jsonData);
// console.log(carData);

function seedData() {
  try {
    for (const car of carData) {
      const newCar = new Car({
        brand: car.brand,
        model: car.model,
        year: car.year,
        bodyStyle: car.bodyStyle,
        fuelType: car.fuelType,
        transmission: car.transmission,
        engine: car.engine,
        mileage: car.mileage,
        color: car.color,
        price: car.price,
        condition: car.condition,
        description: car.description,
        photos: car.photos,
        inMarket: car.inMarket,
      });
      newCar.save();
      console.log(`Car Brand: ${newCar.brand} has been added.`);
    }
  } catch (error) {
    console.log(error);
  }
}
seedData();
