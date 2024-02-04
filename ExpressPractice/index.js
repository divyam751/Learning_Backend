const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

// today we will write our own middlewares

// app.use((req, res, next) => {
//   console.log("middleware called");
//   next();
// });

//  lets write a looger middleware

// function logger(req, res, next) {
//   console.log(req.method, req.url);
//   next();
// }

// app.use(logger);

// function timmer(req, res, next) {
//   let startTime = new Date().getTime();
//   next();
//   res.once("finish", () => {
//     let endTime = new Date().getTime();
//     console.log("time : ", endTime - startTime);
//   });
// }

// app.use(timmer);

//  Cors middleware - bydefault it's blocked by server
//  for this we need to install cors

app.use(
  cors({
    origin: "*",
  })
);
// origin * menas enable for every access user . intead of * we can place the host name url to limit this cors access

app.get("/", (req, res) => {
  res.status(200).send("Home route");
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
