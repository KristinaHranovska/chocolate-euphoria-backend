import express from "express";
import getRandomPromoCode from "../helper/promocodes/getRandomPromoCode.js";

const promocodesRouter = express.Router();

promocodesRouter.get('/', getRandomPromoCode);

export default promocodesRouter;