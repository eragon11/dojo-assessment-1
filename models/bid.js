// Uncomment the code below to use Sequelize ORM
// const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// Uncomment the code below to use Mongoose ORM
const mongoose = require("mongoose");

// Insert your model definition below

const BidSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    date: {
      type: Date,
    },
    opening_price: {
      type: Number,
    },
  },
  { collection: "bid", timestamps: true }
);

let BidModel = mongoose.model("bid", BidSchema);

module.exports = BidModel;
