const express = require("express"); // express require gareko
const router = require("./routes/bookRoute");
require("./routes/bookRoute");
const app = express(); // express lai trigger gareko
// let app = require("express")(); (Second approach)

require("./database/connection"); // importing database configuration
app.use(express.json()); // to parse json data from request body

// localhost:4000/api+ /hello = localhost:4000/api/hello
// localhost:4000/api + /books/:id = localhost:4000/api/books/:id
// localhost:4000/api/haha/ + /books = localhost:4000/api/haha//books
//listen take (port and callback as a parameter)

app.use("/api/books", router);

app.listen(3000, () => {
  console.log("Hello! server/backend/node has statrted at a port 3000");
});
