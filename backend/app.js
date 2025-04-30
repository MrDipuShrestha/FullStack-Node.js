const express = require("express"); // express require gareko
const { books } = require("./database/connection");
const app = express(); // express lai trigger gareko
// let app = require("express")(); (Second approach)

require("./database/connection"); // importing database configuration

app.get("/get-books", async function (req, res) {
  // logic to fetch book from database
  const datas = await books.findAll(); // get all data from table
  res.json({ messgae: "book fetch successfully", data: datas });
});

app.post("/books", function (req, res) {
  // logic to add book to database
  res.json({ messgae: "book added successfully" }); // corrected message
});

app.delete("/books/:id", function (req, res) {
  res.json({ message: "Book deletd ssuccessfully." });
});

app.patch("/books/:id", function (req, res) {
  id = req.params.id;
  res.json({ messgae: `Book of id ${id} updated successfully.` });
});
//listen take (port and callback as a parameter)
app.listen(3000, () => {
  console.log("Hello! server/backend/node has statrted at a port 3000");
});
