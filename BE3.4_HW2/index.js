const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express server");
});

const movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },

  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },

  {
    id: 3,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
];
app.post("/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id);
  const updateToMovie = req.body;

  const dataToUpdate = movies.find((movie) => movie.id === movieId);
  if (!dataToUpdate) {
    res.status(401).json({ error: "Movie not found" });
  } else {
    if (
      !updateToMovie.title ||
      !updateToMovie.director ||
      !updateToMovie.year
    ) {
      res.status(404).json({ error: "Title , director and year are required" });
    } else {
      Object.assign(dataToUpdate, updateToMovie);
      res.status(201).json({
        message: "Movie data updated successfully",
        movie: dataToUpdate,
      });
    }
  }
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

const items = [
  { id: 1, itemName: "Spoon", color: "Silver", quantity: 8 },

  { id: 2, itemName: "Fork", color: "Silver", quantity: 8 },

  { id: 3, itemName: "Plate", color: "Off-White", quantity: 6 },
];

app.post("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const updateMovieData = req.body;
  const dateToUpdate = items.find((item) => item.id === itemId);

  if (!dateToUpdate) {
    res.status(401).json({ error: "Item not found" });
  } else {
    if (
      !updateMovieData.itemName ||
      !updateMovieData.color ||
      !updateMovieData.quantity
    ) {
      res
        .status(404)
        .json({ error: "Item name , color and quantity are required " });
    } else {
      Object.assign(dateToUpdate, updateMovieData);
      res
        .status(201)
        .json({ message: "Item updated successfully", item: dateToUpdate });
    }
  }
});

app.get("/items", (req, res) => {
  res.send(items);
});
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
