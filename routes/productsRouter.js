import express from "express";
import isValidId from "../helper/isValidId";

const productsRouter = express.Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', isValidId, getOneProduct);

export default productsRouter;