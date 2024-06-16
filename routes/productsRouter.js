import express from "express";
import isValidId from "../helper/isValidId.js";
import getAllProducts from "../controllers/products/getAllProducts.js";
import getOneProduct from "../controllers/products/getOneProduct.js";

const productsRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         productName:
 *           type: string
 *           description: Name of the product
 *         category:
 *           type: string
 *           description: Category of the product
 *         price:
 *           type: string
 *           description: Price of the product
 *         description:
 *           type: string
 *           description: Description of the product
 *         compound:
 *           type: array
 *           items:
 *             type: string
 *           description: Compound of the product
 *         photo:
 *           type: string
 *           description: URL of the product photo
 *       required:
 *         - productName
 *         - category
 *         - price
 *         - description
 *         - compound
 *         - photo
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: List of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a single product by ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: A single product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */

productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', isValidId, getOneProduct);

export default productsRouter;
