const express = require("express");

const app = express();

app.use(express.json());

// today we will write our own middlewares

app.get("/", (req, res) => {
  res.status(200).send("Home route");
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
