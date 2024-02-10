const mongoose = require("mongoose");
require("dotenv").config();
const main = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to db");
};
main();
