import express from "express";
import validateBody from "../helper/validateBody.js";
import { createsubScribeSchema } from "../models/subscribe.js";
import subscribeUser from "../controllers/subscribe/subscribeUser.js";

const subscribeRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Subscribe:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the subscriber
 *       example:
 *         email: "user@example.com"
 */

/**
 * @swagger
 * /subscribe:
 *   post:
 *     summary: Subscribe a user by email
 *     tags: [Subscribe]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subscribe'
 *     responses:
 *       200:
 *         description: Subscription successful
 *       400:
 *         description: Invalid email format
 */
subscribeRouter.post('/', validateBody(createsubScribeSchema), subscribeUser);

export default subscribeRouter;
