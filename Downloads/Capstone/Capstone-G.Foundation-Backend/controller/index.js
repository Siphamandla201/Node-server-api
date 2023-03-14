const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const { Users, Products } = require("../model/dbmodels");

// |||||||||||||||||||||||||||||| -USERS ROUTER- |||||||||||||||||||||||||||||||||| \\

const user = new Users();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to life choices" });
});
router.post("/register", bodyParser.json(), (req, res) => {
  user.createUser(req, res);
});

router.post("/login", bodyParser.json(), (req, res) => {
  user.login(req, res);
});

router.get("/users/:userId", (req, res) => {
  user.showUser(req, res);
});

router.get("/users", (req, res) => {
  user.showAllUsers(req, res);
});

router.delete("/users/:userId", (req, res) => {
  user.deleteUser(req, res);
});

router.put("/users/:userId", bodyParser.json(), (req, res) => {
  user.updateUser(req, res);
});

// |||||||||||||||||||||||||||||| -PRODUCTS ROUTER- |||||||||||||||||||||||||||||||||| \\

const product = new Products();

router.post("/products", bodyParser.json(), (req, res) => {
  product.createProduct(req, res);
});

router.get("/products/:productId", (req, res) => {
  product.showProduct(req, res);
});

router.get("/products", (req, res) => {
  product.showAllProducts(req, res);
});

router.delete("/products/:productId", (req, res) => {
  product.deleteProduct(req, res);
});

router.put("/products/:productId", bodyParser.json(), (req, res) => {
  product.updateProduct(req, res);
});

module.exports = router;
