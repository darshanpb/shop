const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts
} = require("./product");

router.post("/product", addProduct);

router.get("/product", getProducts);

module.exports = router;