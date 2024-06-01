import express from "express";
import isValidId from "../helper/isValidId";
import getAllProducts from "../controllers/getAllProducts";
import getOneProduct from "../controllers/getOneProduct";

const productsRouter = express.Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', isValidId, getOneProduct);

export default productsRouter;