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
 *       properties:
 *         email:
 *           type: string
 *           description: Email of the subscriber
 *       required:
 *         - email
 */

/**
 * @swagger
 * /subscribe:
 *   post:
 *     summary: Subscribe a user
 *     tags: [Subscribe]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subscribe'
 *     responses:
 *       200:
 *         description: The user was successfully subscribed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subscribe'
 *       400:
 *         description: Bad request
 */

subscribeRouter.post('/', validateBody(createsubScribeSchema), subscribeUser);

export default subscribeRouter;
