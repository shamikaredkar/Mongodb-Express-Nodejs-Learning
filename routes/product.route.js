const express = require('express');
const router = express.Router();
const {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} = require("../controller/product.controller.js")

//Get all Products
router.get('/', getAllProducts);

//GetProductById
router.get("/:id", getProductById);

//Add a new Product
router.post("/", createProduct);

//Update a Product
router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);


module.exports = router;