const express = require("express");
const { connection, UserModel } = require("./db");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Route");
});

app.get("/users", async (req, res) => {
  const data = await UserModel.find();
  res.send(data);
});
app.post("/users", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    // await UserModel.insertMany(data);
    data.save();
    res.send({ msg: "Data inserted", data });
  } catch (error) {
    res.send(error);
  }
});
app.delete("/users", async (req, res) => {
  await UserModel.deleteMany();
  res.send("data deleted");
});

app.listen(8000, async () => {
  try {
    await connection;
    console.log("Connected to DB successfully ");
  } catch (error) {
    console.log("Error while connecting to DB");
    console.log(error);
  }
  console.log("Server is stated at port 8000");
});
