import { Schema, model } from 'mongoose';
import Joi from 'joi';

const promocodeShema = new Schema({
    promocode: {
        type: String,
    },
    percent: {
        type: Number,
    }
});

export const promocodeJoiShema = Joi.object({
    promocode: Joi.string(),
    percent: Joi.number(),
});

export const Promocode = model('promocode', promocodeShema);