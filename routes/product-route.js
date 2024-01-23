const express = require("express");
const Product = require("../models/product-model");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product-controller");

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/product", createProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

module.exports = router;
