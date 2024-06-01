import express from "express";
import getAllReviews from "../controllers/reviews/getAllReviews.js";
import validateBody from "../helper/validateBody.js";
import { createReviewSchema } from "../models/review.js";
import postReview from "../controllers/reviews/postReview.js";

const reviewsRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - comment
 *       properties:
 *         _id:
 *           type: string
 *           description: The review ID
 *         name:
 *           type: string
 *           description: The name of the reviewer
 *         email:
 *           type: string
 *           description: The email of the reviewer
 *         phone:
 *           type: string
 *           description: The phone number of the reviewer
 *         comment:
 *           type: string
 *           description: The review comment
 *       example:
 *         _id: "665b04985a6b6fa18a935f59"
 *         name: "John Doe"
 *         email: "john.doe@example.com"
 *         phone: "(12) 345-6789"
 *         comment: "Great chocolate! Highly recommend."
 */

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Returns the list of all the reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: The list of the reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */
reviewsRouter.get('/', getAllReviews);

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Creates a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       201:
 *         description: The review was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       400:
 *         description: Bad request
 */
reviewsRouter.post('/', validateBody(createReviewSchema), postReview);

export default reviewsRouter;
