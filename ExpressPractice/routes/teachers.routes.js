const { Router } = require("express");

const teachers = Router();

teachers.get("/", (req, res) => {
  res.send("Teachers get route");
});
teachers.post("/create", (req, res) => {
  res.send("Teachers create route");
});
teachers.patch("/update", (req, res) => {
  res.send("Teachers update route");
});
teachers.delete("/delete", (req, res) => {
  res.send("Teachers delete route");
});

module.exports = teachers;
