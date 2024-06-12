import express from "express";
import validateBody from "../helper/validateBody.js";
import postOrders from "../controllers/orders/postOrders.js";
import { createOrderSchema } from "../models/order.js";

const orderRouter = express.Router();

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

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderItem:
 *       type: object
 *       properties:
 *         nameProduct:
 *           type: string
 *           description: The name of the product
 *           example: Small chocolate box
 *         quantity:
 *           type: integer
 *           description: The quantity of the product
 *           example: 1
 *         total:
 *           type: string
 *           description: The total price of the product
 *           example: 190 UAN
 *     Order:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: The first name of the customer
 *           example: Krystyna
 *         lastName:
 *           type: string
 *           description: The last name of the customer
 *           example: Hranovska
 *         phone:
 *           type: string
 *           description: The phone number of the customer
 *           example: 12-456-7890
 *         selectRegion:
 *           type: string
 *           description: The selected region
 *           example: Zhytomyr region
 *         selectCity:
 *           type: string
 *           description: The selected city
 *           example: Malyn
 *         comment:
 *           type: string
 *           description: A comment from the customer
 *           example: Please, don't call me
 *         status:
 *           type: string
 *           description: The status of the order
 *           example: Order accepted
 *         orderItems:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *         totalPrice:
 *           type: number
 *           description: The total price of the order
 *           example: 190
 */

orderRouter.post('/', validateBody(createOrderSchema), postOrders);

export default orderRouter;