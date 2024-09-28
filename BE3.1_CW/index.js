const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.get("/contact", (req, res) => {
  res.send("Contact us at contact@example.com");
});
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
