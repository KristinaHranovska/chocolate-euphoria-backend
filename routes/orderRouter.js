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
 *         photo:
 *           type: string
 *           description: URL of the product photo
 *         quantity:
 *           type: number
 *           description: Quantity of the product
 *         total:
 *           type: string
 *           description: Total price for this item
 *       required:
 *         - nameProduct
 *         - photo
 *         - quantity
 *         - total
 *     OrderUser:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: First name of the user
 *         lastName:
 *           type: string
 *           description: Last name of the user
 *         phone:
 *           type: string
 *           description: Phone number of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         selectRegion:
 *           type: string
 *           description: User's selected region
 *         selectCity:
 *           type: string
 *           description: User's selected city
 *         comment:
 *           type: string
 *           description: Additional comments from the user
 *       required:
 *         - firstName
 *         - lastName
 *         - phone
 *         - email
 *     Order:
 *       type: object
 *       properties:
 *         userContact:
 *           $ref: '#/components/schemas/OrderUser'
 *         order:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *         totalPrice:
 *           type: number
 *           description: Total price of the order
 *         discount:
 *           type: number
 *           description: Discount applied to the order
 *         status:
 *           type: string
 *           description: Status of the order
 *       required:
 *         - userContact
 *         - order
 *         - totalPrice
 *         - discount
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: The order was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Bad request
 */

orderRouter.post('/', validateBody(createOrderSchema), postOrders);

export default orderRouter;
