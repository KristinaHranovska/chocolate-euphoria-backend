import express from "express";
import validateBody from "../helper/validateBody.js";
import postOrders from "../controllers/orders/postOrders.js";
import { createOrderSchema } from "../models/order.js";

const orderRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderItem:
 *       type: object
 *       properties:
 *         nameProduct:
 *           type: string
 *           description: Name of the product
 *         quantity:
 *           type: number
 *           description: Quantity of the product
 *         total:
 *           type: string
 *           description: Total price for the product
 *     Order:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - phone
 *         - orderItems
 *         - totalPrice
 *       properties:
 *         firstName:
 *           type: string
 *           description: First name of the customer
 *         lastName:
 *           type: string
 *           description: Last name of the customer
 *         phone:
 *           type: string
 *           description: Phone number of the customer
 *         selectRegion:
 *           type: string
 *           description: Selected region
 *         selectCity:
 *           type: string
 *           description: Selected city
 *         comment:
 *           type: string
 *           description: Comment for the order
 *         status:
 *           type: string
 *           description: Status of the order
 *           default: Order accepted
 *         orderItems:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *         totalPrice:
 *           type: number
 *           description: Total price for the order
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Creates a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: The order was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Bad request
 */


orderRouter.post('/', validateBody(createOrderSchema), postOrders);

export default orderRouter;