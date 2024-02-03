const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to home page");
});

app.get("/players", (req, res) => {
  fs.readFile("db.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Something went wrong while fetching data");
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/players", (req, res) => {
  const newPlayer = req.body;
  let fileData;

  fs.readFile("db.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      fileData = JSON.parse(data);

      fileData.India.push(newPlayer);
      fileData = JSON.stringify(fileData);

      fs.writeFile("db.json", fileData, "utf-8", (err) => {
        if (err) {
          res.status(500).send("Error during writing in file");
        } else {
          res.status(200).send(`${newPlayer.name} is added into database `);
        }
      });
    }
  });
});
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
