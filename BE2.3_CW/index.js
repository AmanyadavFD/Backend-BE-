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
// createMovie(newMovie);

// Find a movie with a particular title
async function readMovieByTitle(movieTitle) {
  try {
    const movie = await Movie.findOne({ title: movieTitle });
    console.log(movie);
  } catch (error) {
    console.log(error);
  }
}

// readMovieByTitle("Dilwale Dulhania Le Jayenge");

// To get all the movies
async function getAllMovies() {
  try {
    const allMovies = await Movie.find();
    console.log(allMovies);
  } catch (error) {
    console.log(error);
  }
}
// getAllMovies();

// Get a movie by director movie
async function getMovieByDirector(directorName) {
  try {
    const movieByDirector = await Movie.findOne({ director: directorName });
    console.log(movieByDirector);
  } catch (error) {
    console.log(movieByDirector);
  }
}
// getMovieByDirector("Aditya Roy Chopra");

// Find the movie by id and update it's rating

async function updateMovie(movieId, dataToUpdate) {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {
      new: true,
    });
    console.log(updatedMovie);
  } catch (error) {
    console.log("Error to updating Movie Rating", error);
  }
}
updateMovie("66ba87210167039c621dc07e", { rating: 8.0 });

// find one data and update its value

async function updateMovieDetails(movieTitle, dataToUpdate) {
  try {
    const updateMovie = await Movie.findOneAndUpdate(
      { title: movieTitle },
      dataToUpdate,
      { new: true }
    );
    console.log(updateMovie);
  } catch {
    console.log("Error in changing data:", error);
  }
}
updateMovieDetails("Kabhi Khushi Kabhie Gham", { releaseYear: 2090 });
