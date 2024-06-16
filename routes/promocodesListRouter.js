import express from "express";
import getRandomPromoCode from "../controllers/promocodes/getRandomPromoCode.js";
import checkPromocode from "../controllers/promocodes/checkPromocode.js";

const promocodesListRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Promocode:
 *       type: object
 *       properties:
 *         promocode:
 *           type: string
 *           description: Promocode string
 *         percent:
 *           type: number
 *           description: Discount percentage
 *       required:
 *         - promocode
 *         - percent
 *     CheckPromocode:
 *       type: object
 *       properties:
 *         promocode:
 *           type: string
 *           description: Promocode string to check
 *       required:
 *         - promocode
 */

/**
 * @swagger
 * /promocodes:
 *   get:
 *     summary: Get a random promocode
 *     tags: [Promocode]
 *     responses:
 *       200:
 *         description: A random promocode
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Promocode'
 */

/**
 * @swagger
 * /promocodes/check:
 *   post:
 *     summary: Check a promocode
 *     tags: [Promocode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CheckPromocode'
 *     responses:
 *       200:
 *         description: The promocode is valid
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Promocode'
 *       400:
 *         description: Invalid promocode
 */

promocodesListRouter.get('/', getRandomPromoCode);
promocodesListRouter.post('/check', checkPromocode);

export default promocodesListRouter;
