import { Schema, model } from 'mongoose';
import Joi from 'joi';
import { commetRegax, valueNumber } from '../helper/constant.js';
import mongooseError from '../helper/mongooseError.js';

const orderShema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        match: [valueNumber, 'Invalid phone number format. Use XX-XXX-XXXX'],
        required: true,
    },
    comment: {
        type: String,
        match: [commetRegax, 'A comment can only contain Latin characters, numbers, and symbols .,!?/-"():;'],
        maxLength: 300
    },
    status: {
        type: String,
        default: 'Order accepted',
    }
}, { versionKey: false });

orderShema.post('save', mongooseError);

export const createOrderSchema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().required(),
    comment: Joi.string().max(300).pattern(commetRegax),
    status: Joi.string()
})

export const Order = model('order', orderShema);