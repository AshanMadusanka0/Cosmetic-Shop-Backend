import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    
   {
    productID :{
        type : String,
        required : true,
        unique : true,
        
        
       },
    name :{
        type : String,
        required : true,
        
       },
       weight :{
        type : Number,
        required : true,
        
       },
       price :{
        type : Number,
        required : true,
        
       },
        alternativeNames:{
        type : String,
      },
        imageUrl:{
        type : String,
      },
        description :{
        type : String,
      },
   }
    
    
)
// Define the model

const Product = mongoose.model("Product", productSchema)

export default Product;