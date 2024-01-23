const asyncHandler = require("express-async-handler");
const Product = require("../models/product-model");

const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const getProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const createProduct = asyncHandler(async (req, res) => {
  //   console.log(req.body);
  //   res.send(req.body);
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID, ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID, ${id}` });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
