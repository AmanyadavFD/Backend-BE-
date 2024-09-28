require("../db");
console.log("BE1.2_CW");
const fs = require("fs");
const Movie = require("./models/movies.models");
const jsonData = fs.readFileSync("movies.json", "utf-8");
const moviesData = JSON.parse(jsonData);
// console.log(movieData);

function seedData() {
  try {
    for (const movieData of moviesData) {
      const newMovie = new Movie({
        title: movieData.title,
        releaseYear: movieData.releaseYear,
        genre: movieData.genre,
        director: movieData.director,
        actors: movieData.actors,
        country: movieData.country,
        rating: movieData.rating,
        plot: movieData.plot,
        awards: movieData.awards,
        posterUrl: movieData.posterUrl,
        trailerUrl: movieData.trailerUrl,
      });
      newMovie.save();
      console.log(`Movie Data `, newMovie.title);
    }
  } catch (error) {
    console.log(error);
  }
}
seedData();
