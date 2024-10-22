const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'A product must have a name'],
    },
    address: {
        type: String,
        required: [true, 'A product must have an address'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'there must be a phone number'],
    },

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;