// getting-started.js
const mongoose = require("mongoose");

const connectionString = `mongodb+srv://raazeshp9:<password>@cluster0.0jyoc8c.mongodb.net/?retryWrites=true&w=majority`;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(connectionString);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
