import express from "express";

import { createProdcut, getProduct } from "../controllers/productController.js";



const productRouter = express.Router();

//productRouter.get("/", getProduct);

productRouter.get("/:name",getProduct);

productRouter.post("/", createProdcut);

export default productRouter;
