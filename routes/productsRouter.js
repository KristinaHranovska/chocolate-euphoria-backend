import express from "express";
import isValidId from "../helper/isValidId.js";
import getAllProducts from "../controllers/getAllProducts.js";
import getOneProduct from "../controllers/getOneProduct.js";
import { Product } from "../models/product.js";

const productsRouter = express.Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', isValidId, getOneProduct);


export default productsRouter;