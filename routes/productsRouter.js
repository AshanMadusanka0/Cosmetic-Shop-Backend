import express from "express";

import { createProdcut, deleteProduct, getProduct, getProductByName } from "../controllers/productController.js";



const productRouter = express.Router();

productRouter.get("/", getProduct);

productRouter.get("/:name",getProductByName);

productRouter.post("/", createProdcut);

productRouter.delete("/:productId", deleteProduct);


export default productRouter;
