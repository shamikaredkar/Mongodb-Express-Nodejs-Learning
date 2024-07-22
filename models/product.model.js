const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"],
        },
        quantity: {
            type: Number,
            required: [true, "Please enter a quantity"],
            default: 0
        },
        price: {
            type: Number,
            required: [true, "Please enter a price"],
            default: 0
        },
        image: {
            type: String,
            required: false
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        UpdatedAt: {
            type: Date,
            default: Date.now
        }

    },
);

//Allow Mongodb to use this
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product