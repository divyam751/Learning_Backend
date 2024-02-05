const { Router } = require("express");

const students = Router();

students.get("/", (req, res) => {
  res.send("students get route");
});
students.post("/create", (req, res) => {
  res.send("students create route");
});
students.patch("/update", (req, res) => {
  res.send("students update route");
});
students.delete("/delete", (req, res) => {
  res.send("students delete route");
});

module.exports = students;
