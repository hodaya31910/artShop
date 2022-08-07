const mongoose = require("mongoose");
const Product = require("../moduls/product");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
