import express from "express";
import validateBody from "../helper/validateBody.js";
import { createsubScribeSchema } from "../models/subscribe.js";
import subscribeUser from "../controllers/subscribe/subscribeUser.js";

const subscribeRouter = express.Router();

subscribeRouter.post('/', validateBody(createsubScribeSchema), subscribeUser);

export default subscribeRouter;