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

module.exports = db;
