const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    username: String,
    password: String,
    email: String,
    cart: [{
        id: Number,
        name: String,
        img: String,
        price: Number,
        qrcode: String,
        quantity: {
            type: Number,
            default: 1
        },
        date: {
            type: String,
            default: Date.now()
        }
    }]
});

// Model
const Product = mongoose.model('Product', ProductSchema);

module.exports =  Product;