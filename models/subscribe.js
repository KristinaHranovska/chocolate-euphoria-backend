import { Schema, model } from 'mongoose';
import Joi from 'joi';
import { formatRegex } from '../helper/constant.js';
import mongooseError from '../helper/mongooseError.js';

const subscribeShema = new Schema({
    email: {
        type: String,
        match: [formatRegex, 'Invalid email format'],
        required: true,
    },
}, { versionKey: false });

subscribeShema.post('save', mongooseError);

export const createsubScribeSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': 'Email is required',
        'string.email': 'Invalid email format'
    }),
});

export const Subscribe = model('subscriber', subscribeShema);