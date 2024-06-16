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
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the reviewer
 *         email:
 *           type: string
 *           description: Email of the reviewer
 *         phone:
 *           type: string
 *           description: Phone number of the reviewer
 *         comment:
 *           type: string
 *           description: Comment from the reviewer
 *         published:
 *           type: boolean
 *           description: Is the review published
 *         photo:
 *           type: string
 *           description: URL of the reviewer's photo
 *       required:
 *         - name
 *         - email
 *         - comment
 */

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Get all reviews
 *     tags: [Review]
 *     responses:
 *       200:
 *         description: List of all reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Create a new review
 *     tags: [Review]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       200:
 *         description: The review was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       400:
 *         description: Bad request
 */

reviewsRouter.get('/', getAllReviews);
reviewsRouter.post('/', validateBody(createReviewSchema), postReview);

export default reviewsRouter;
