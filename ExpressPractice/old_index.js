const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page route");
});

app.get("/lecture", (req, res) => {
  res.send("lecture page " + req.method + req.url);
});
app.post("/lecture", (req, res) => {
  //   res.send("lecture page");
  res.send("got res" + JSON.stringify(req.body));
});

app.get("/post", (req, res) => {
  fs.readFile("post.json", "utf-8", (err, data) => {
    if (err) {
      res.send("Something went wrong");
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/welcome", (req, res) => {
  const { name, age } = req.query;
  res.send("welcome " + name + " and your age is " + age);
});

app.get("/post/:id", (req, res) => {
  fs.readFile("post.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Something went wrong");
    } else {
      const jsonData = JSON.parse(data);
      const filterData = jsonData.filter((post) => {
        return post.id === parseInt(req.params.id);
      });
      console.log(filterData);
      res.status(200).json(filterData);
    }
  });
});

app.get("/header", (req, res) => {
  console.log(req.headers);
  res.header("server", "localServer2");
  res.send("Check Header");
});
app.listen(8000, () => {
  console.log("App listing on port 8000");
});
