const express = require("express");
const app = express();
app.use(express.json());
require("../db");
const Movie = require("./models/movies.models");

async function createMovie(newMovie) {
  try {
    const movies = new Movie(newMovie);
    const saveMovie = await movies.save();
    // console.log("New Movie Data: ", saveMovie);
    return saveMovie;
  } catch (error) {
    // console.log(error);
    throw error;
  }
}
// createMovie(newMovie);

app.post("/movies", async (req, res) => {
  try {
    const savedMovie = await createMovie(req.body);
    res
      .status(201)
      .json({ message: "Movie added Successfully.", movie: savedMovie });
  } catch (error) {
    res.status(500).json({ error: "Failed to add movie" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
