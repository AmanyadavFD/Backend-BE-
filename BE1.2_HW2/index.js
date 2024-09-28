require("../db");
const fs = require("fs");
const Book = require("./models/books.models");
const jsonData = fs.readFileSync("books.json", "utf-8");

const bookData = JSON.parse(jsonData);
// console.log(jsonData);

function seedData() {
  try {
    for (const book of bookData) {
      const newBook = new Book({
        title: book.title,
        author: book.author,
        publishedYear: book.publishedYear,
        genre: book.genre,
        language: book.language,
        country: book.country,
        rating: book.rating,
        summary: book.summary,
        coverImageUrl: book.coverImageUrl,
      });
      newBook.save();
      console.log(`Book Title: `, newBook.title);
    }
  } catch (error) {
    console.log(error);
  }
}
seedData();
