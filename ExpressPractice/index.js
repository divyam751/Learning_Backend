const express = require("express");
const teachersRoutes = require("./routes/teachers.routes");
const studentsRoutes = require("./routes/students.routes");

const app = express();
app.use(express.json());

// localhost://8000/?apiKey=1234532
app.use((req, res, next) => {
  if (!req.query.apiKey) {
    return res.status(401).send("No api key provided");
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.use("/teachers", teachersRoutes);
app.use("/students", studentsRoutes);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
