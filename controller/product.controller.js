const Product = require("../models/product.model.js")

const getAllProducts = async (req, res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    }catch(err){
        res.status(500).json({message: err.messsage});
    }
}

const getProductById = async (req, res) => {
    try {
        //Getting the id from the URL
        const {id} = req.params
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({message: err.messsage});
    }
}

const createProduct = async (req, res) => {
    //Saving data using mongodb
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(err) {
        res.status(500).json({message: err.message})
        console.warn(err.messsage)
    }
}

const updateProduct = async (req, res) => {
        try {
        const {id} = req.params
        //Whatever the user put in the req.body we want to update itr with it
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({message: "Product not found not found"});
        }
        res.status(200).json({message: "Product delered successfully deleted"});
    }catch (error) {
        res.status(500).json({message: error.message});
    }
}


module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct}