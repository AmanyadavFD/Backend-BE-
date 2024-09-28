require("../db");
const fs = require("fs");
const Car = require("./models/car.models");
const jsonData = fs.readFileSync("cars.json", "utf-8");
const carData = JSON.parse(jsonData);

function seedData() {
  try {
    for (let car of carData) {
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
// seedData();
const carData1 = {
  brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg",
  ],
};
const carData2 = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg",
  ],
};
async function seedCarData(Data) {
  try {
    const pushCarData = new Car(Data);
    const saveCar = await pushCarData.save();
    console.log(saveCar);
  } catch (error) {
    console.log(error);
  }
}
// seedCarData(carData1);
// seedCarData(carData2);

// Read all cars from the database
async function getAllCarData() {
  try {
    const carData = await Car.find();
    console.log(carData);
  } catch (error) {
    console.log(error);
  }
}
// getAllCarData();

// Create a function to read cars by brand ("Ford")
async function cardBrand(brand) {
  try {
    const carByBrand = await Car.findOne({ brand: brand });
    console.log(carByBrand);
  } catch (error) {
    console.log(error);
  }
}
// cardBrand("Ford");
// Read cars by color ("Black")

async function readByCarColor(carBrand) {
  try {
    const carColor = await Car.findOne({ color: carBrand });
    console.log(carColor);
  } catch (error) {
    console.log(error);
  }
}
// readByCarColor("Black");

// Create a function to update the price of a car with model "Corolla"

async function carByModel(model, dateToUpdate) {
  try {
    const updatedCar = await Car.findOneAndUpdate({ model }, dateToUpdate, {
      new: true,
    });
    console.log(updatedCar);
  } catch (error) {
    console.log(error);
  }
}

// carByModel("Corolla", { price: 2300000 });

//  Create a function to update the condition of a car with model "Model S"
async function carUpdateByCondition(model, condition) {
  try {
    const updateCarCondition = await Car.findOneAndUpdate(
      { model },
      condition,
      { new: true }
    );
    console.log(updateCarCondition);
  } catch (error) {
    console.log(error);
  }
}
// carUpdateByCondition("Model S", { condition: "Used" });

//  Create a function to delete a car by ID. Take the id of the car brand Tesla from the database and delete that car record
async function deleteCarByID(carId) {
  try {
    const deleteCar = await Car.findByIdAndDelete(carId);
    console.log(deleteCar);
  } catch (error) {
    console.log(error);
  }
}
// deleteCarByID("66bb92856bc942802f760557");

// Create a function to delete a car by its body style. Delete the car data with body style "Coupe" from the database
async function deleteCarBodyStyle(carBody) {
  try {
    const deleteCar = await Car.findOneAndDelete(carBody);
    console.log(deleteCar);
  } catch (error) {
    console.log(error);
  }
}
deleteCarBodyStyle({ bodyStyle: "Coupe" });
