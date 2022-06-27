const mongoose = require("mongoose");
const Product = require("../moduls/product");

const cartSchema = mongoose.Schema({
    userId: {
        type: String,
    },

    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
});

module.exports = mongoose.model("Cart", cartSchema);