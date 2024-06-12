import express from "express";
import validateBody from "../helper/validateBody.js";
import postOrders from "../controllers/orders/postOrders.js";
import { createOrderSchema } from "../models/order.js";

const orderRouter = express.Router();

/**
 * @swagger
 * /order:
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