import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
        name: String,
        weight: Number,
        price: String,
    }
)
// Define the model

const Product = mongoose.model("Product", productSchema)

export default Product;