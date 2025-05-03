const { books } = require("../database/connection");

exports.fetchBooks = async (req, res) => {
  // logic to fetch all the books

  const datas = await books.findAll(); // get all the books

  res.status(200).json({
    message: "books fetched successfully.",
    datas,
  });
};

exports.addBooks = async (req, res) => {
  const { bookName, bookPrice, bookAuther, bookGenre } = req.body;

  await books.create({
    bookName: bookName,
    bookPrice: bookPrice,
    bookGenre: bookGenre,
    bookAuther: bookAuther,
  });

  res.status(201).json({
    message: "Book added successfully.",
  });
};

exports.deleteBook = async function (req, res) {
  // logic to delete book
  const id = req.params.id;

  try {
    const deleteted = await books.destroy({
      where: { id: id },
    });

    if (deleteted) {
      res.json({
        message: "Book Deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "Book not found.",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete the book.",
      error: error.message(),
    });
  }
};

exports.editBook = async function (req, res) {
  const id = req.params.id;
  const { bookName, bookPrice, bookAuther, bookGenre } = req.body;

  try {
    const book = await books.findByPk(id);

    if (!book) {
      res.status(404).json({
        message: "Book not found",
      });
    }

    const updated_data = await book.update({
      bookName: bookName,
      bookPrice: bookPrice,
      bookAuther: bookAuther,
      bookGenre: bookGenre,
    });

    res.status(200).json({
      message: "Book updated successfully",
      updated_data,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update book",
    });
  }
};

exports.fetchSingleBook = async (req, res) => {
  const id = req.params.id;

  const book = await books.findByPk(id);
  // books.findAll({
  //     where : {
  //         bookName : "hello world",
  //         authorName : "manish"
  //     }
  // })
  // }) // select * from books where bookName="hello world" && authorName = "manish"
  // const datass = await books.findAll({
  //     where : {
  //         id : id
  //     }
  // }) // always returns array
  res.status(200).json({
    message: "Single Book fetched successfully",
    datas,
    // datass
  });
};
