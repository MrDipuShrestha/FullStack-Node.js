// creating a book model

const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    // table name = books (if i give 'book' it automatically convert to 'books')
    // columns
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookPrice: {
      type: DataTypes.INTEGER,
    },
    bookAuther: {
      type: DataTypes.STRING,
      defaultValue: "Dipesh Shrestha",
    },
    bookGenre: {
      type: DataTypes.STRING,
    },
  });

  return Book;
};

module.exports = bookModel;
