const express = require("express"); // express require gareko
const { books } = require("./database/connection");
const app = express(); // express lai trigger gareko
// let app = require("express")(); (Second approach)

require("./database/connection"); // importing database configuration
app.use(express.json()); // to parse json data from request body

app.get("/books", async function (req, res) {
  // logic to fetch book from database
  const datas = await books.findAll(); // get all data from table
  res.json({ messgae: "book fetch successfully", data: datas });
});

app.post("/books", async function (req, res) {
  // logic to add book to database
  console.log(req.body);
  // const bookName = req.body.bookName;
  const { bookName, bookPrice, bookAuther, bookGenre } = req.body; // destructuring
  // console.log(bookName);
  // console.log(bookPrice);
  // check if all data aakoxa bane only processed, else not process
  await books.create({
    bookName: bookName,
    bookPrice: bookPrice,
    bookAuther: bookAuther,
    bookGenre: bookGenre,
  });

  res.json({ message: "book added successfully" });
});

app.delete("/books/:id", function (req, res) {
  res.json({ message: "Book deleted successfully." });
});

app.patch("/books/:id", function (req, res) {
  id = req.params.id;
  res.json({ messgae: `Book of id ${id} updated successfully.` });
});
//listen take (port and callback as a parameter)
app.listen(3000, () => {
  console.log("Hello! server/backend/node has statrted at a port 3000");
});
