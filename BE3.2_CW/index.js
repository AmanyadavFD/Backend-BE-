const express = require("express");
const app = express();

app.use(express.json());

const cars = [{ id: 1, make: "Toyata", model: "Camry", year: 2002 }];

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.post("/cars", (req, res) => {
  const newCar = req.body;
  if (!newCar.make || !newCar.model || !newCar.year) {
    res.status(400).json({ error: "Make, Model and Year are required" });
  } else {
    cars.push(newCar);
    res.status(201).json({ messsage: "Car added successfully.", car: newCar });
  }
});

app.get("/cars", (req, res) => {
  res.send(cars);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
