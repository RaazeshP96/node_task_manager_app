// getting-started.js
const mongoose = require("mongoose");

const connectDB = (url) => {
  connection(url).catch((err) => console.log(err));
};

async function connection(url) {
  mongoose.set("strictQuery", false);
  await mongoose.connect(url);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = connectDB;
