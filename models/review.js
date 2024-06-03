import { Schema, model } from 'mongoose';
import Joi from 'joi';
import { formatRegex, valueNumber } from '../helper/constant.js';
import mongooseError from '../helper/mongooseError.js';

const reviewShema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for review'],
    },
    email: {
        type: String,
        match: [formatRegex, 'Invalid email format'],
        required: true,
    },
    phone: {
        type: String,
        match: [valueNumber, 'Invalid phone number format. Use XX-XXX-XXXX'],
        default: "22-333-4444",
    },
    comment: {
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: false,
    }
}, { versionKey: false });

reviewShema.post('save', mongooseError);

export const createReviewSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string(),
    comment: Joi.string().required(),
    published: Joi.boolean(),
})

export const Review = model('review', reviewShema);