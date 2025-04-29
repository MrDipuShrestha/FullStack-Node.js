// logic for database connection

const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = require("sequelize")
// const Sequelize = require.Sequelize

const sequelize = new Sequelize(
  "postgresql://postgres.jyvgonvzxyngkhvdiqev:@thisisthepassword@aws-0-us-east-2.pooler.supabase.com:6543/postgres"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log("Error occur: " + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// first approach to trigger model
// const bookModel = require("./models/book.model");
// bookModel()
// second approach
db.books = require("./models/book.model")(sequelize, DataTypes);
db.products = require("./models/product.model")(sequelize, DataTypes);
// db.users = require("./models//user.model")(sequelize, DataTypes);

// code for make model migrations
sequelize.sync({ force: false, alter: false }).then(() => {
  console.log("Migrate complete");
});

module.exports = db;
