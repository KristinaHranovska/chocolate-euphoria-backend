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
 *       required:
 *         - productName
 *         - category
 *         - price
 *         - description
 *         - compound
 *         - photo
 *       properties:
 *         _id:
 *           type: string
 *           description: The product ID
 *         productName:
 *           type: string
 *           description: The name of the product
 *         category:
 *           type: string
 *           description: The category of the product
 *         price:
 *           type: string
 *           description: The price of the product
 *         description:
 *           type: string
 *           description: A description of the product
 *         compound:
 *           type: array
 *           items:
 *             type: string
 *           description: The compound details of the product
 *         photo:
 *           type: string
 *           description: URL to the product photo
 *       example:
 *         _id: "665b04985a6b6fa18a935f59"
 *         productName: "Lime & Sea Salt dark chocolate"
 *         category: "Dark chocolate"
 *         price: "66 UAH"
 *         description: "Sea salt and chocolate is a unique combination that has completely taken..."
 *         compound: 
 *           - "Sustainably grown chocolate"
 *           - "Palm oil free & all natural ingredients"
 *           - "Recyclable packaging"
 *           - "Proudly made in York, North Yorkshire"
 *           - "Registered with The Vegan Society"
 *         photo: "https://res.cloudinary.com/dntbkzhtq/image/upload/v1715618947/limeAmdS..."
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
productsRouter.get('/', getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: The product description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
productsRouter.get('/:id', isValidId, getOneProduct);

export default productsRouter;
