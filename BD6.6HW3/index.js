const cors = require("cors");
const express = require("express");
const { getAllBooks, getBookById } = require("./controllers");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/books", async (req, res) => {
  const books = await getAllBooks();
  res.json({ books });
});

app.get("/books/details/:id", async (req, res) => {
  let book = await getBookById(parseInt(req.params.id));
  res.json({
    book,
  });
});

module.exports = { app };
