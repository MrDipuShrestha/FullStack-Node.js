const {
  fetchBooks,
  addBooks,
  deleteBook,
  editBook,
  fetchSingleBook,
} = require("../controllers/bookController");

const router = require("express").Router();

router.route("/").get(fetchBooks).post(addBooks);
router.route("/:id").delete(deleteBook).patch(editBook).get(fetchSingleBook);

// router.get("/books",fetchBooks)
// router.post("/boooks",addBook)
// router.delete("/books",deleteBook) yesari ni milxa garna chai

module.exports = router;
