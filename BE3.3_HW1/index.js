const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, From Express Server.");
});

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },

  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },

  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const index = books.findIndex((book) => book.id == bookId);

  if (index === -1) {
    res.status(404).json({ error: "Book not found" });
  } else {
    books.splice(index, 1);
    res.status(201).json({ message: "Book Deleted Successfully." });
  }
});

app.get("/books", (req, res) => {
  res.send(books);
});

const todos = [
  { id: 1, title: "Water the plants", day: "Saturday" },

  { id: 2, title: "Go for a walk", day: "Sunday" },
];

app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const index = todos.findIndex((todo) => todo.id == todoId);
  if (index === -1) {
    res.status(404).json({ error: "Todo does not exist" });
  } else {
    todos.splice(index, 1);
    res.status(201).json({ message: "Todo Deleted Successfully." });
  }
});

app.get("/todos", (req, res) => {
  res.send(todos);
});
const port = 3000;

app.listen(port, () => {
  console.log(`Server is runing on the port ${port}`);
});
