const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

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

app.post("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const updateBookData = req.body;
  const bookToUpdate = books.find((book) => book.id === bookId);

  if (!bookToUpdate) {
    res.status(404).json({ error: "Book not found" });
  } else {
    if (
      !updateBookData.title ||
      !updateBookData.author ||
      !updateBookData.year
    ) {
      res.status(401).json({ error: "Title , Author and year are required" });
    } else {
      Object.assign(bookToUpdate, updateBookData);
      res
        .status(201)
        .json({ message: "Book data update successfully", book: bookToUpdate });
    }
  }
});

app.get("/books", (req, res) => {
  res.send(books);
});

const todos = [
  { id: 1, title: "Water the plants", day: "Saturday" },

  { id: 2, title: "Go for a walk", day: "Sunday" },
];

app.post("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const updateTodoData = req.body;

  const todoToUpdate = todos.find((todo) => todo.id === todoId);

  if (!todoToUpdate) {
    res.status(404).json({ error: "Todo does not exist" });
  } else {
    if (!updateTodoData.title || !updateTodoData.day) {
      res.status(401).json({ error: "Title and day are required" });
    } else {
      Object.assign(todoToUpdate, updateTodoData);
      res.status(201).json({
        message: "Todo data updated successfully!",
        todo: todoToUpdate,
      });
    }
  }
});

app.get("/todos", (req, res) => {
  res.send(todos);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
