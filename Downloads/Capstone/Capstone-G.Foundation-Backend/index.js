const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 7000;
const router = require("./config/index.js");

const app = express();

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const { errorHandling } = require("./middleware/errorHandling");

app.use(router);

app.listen(port, (req, res) => {
  console.log(`you are connected on port ${port}`);
});

app.use(errorHandling);
