const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = mongoose.Schema({
  name: String,
  city: String,
});
const UserModel = mongoose.model("user", userSchema);

const connection = mongoose.connect(process.env.MONGO_URL);

module.exports = { connection, UserModel };
