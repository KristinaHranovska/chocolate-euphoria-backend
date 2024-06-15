import { Schema, model } from 'mongoose';
import Joi from 'joi';

const promocodeShema = new Schema({
    promocode: {
        type: String,
    },
});

export const promocodeJoiShema = Joi.object({
    promocode: Joi.string()
});

export const Promocode = model('promocode', promocodeShema);