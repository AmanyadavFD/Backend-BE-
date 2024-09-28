require("../db");

const Movie = require("./models/movies.models");

const newMovie = {
  title: "New Movie",
  releaseYear: 2023,
  genre: "Drama",
  director: "Aditya Roy Chopra",
  actors: ["Actor1", "Actor2"],
  language: "Hindi",
  country: "India",
  rating: 6.1,
  plot: "A young man and woman fall in love on an Australia trip.",
  awards: "IFA Filmfare Awards",
  posterUrl: "https://example.com/new-poster1.jpg",
  trailerUrl: "https://example.com/new-trailer1.mp4",
};

async function createMovie(newMovie) {
  try {
    const movies = new Movie(newMovie);
    const saveMovie = await movies.save();
    console.log("New Movie Data: ", saveMovie);
  } catch (error) {
    // console.log(error);
    throw error;
  }
}
createMovie(newMovie);
