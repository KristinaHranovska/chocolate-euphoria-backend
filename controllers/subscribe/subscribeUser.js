import { Subscribe } from "../../models/subscribe.js";
import sendEmail from '../../helper/sendEmail.js';
import renderTemplate from "../../helper/renderTemplate.js";
import HttpError from "../../helper/HttpError.js";

const subscribeUser = async (req, res, next) => {
    try {
        const { email } = req.body;

        const user = await Subscribe.findOne({ email });

        if (user) {
            throw HttpError(409, "Email already in use");
        }

        const result = await Subscribe.create(req.body);

        const emailData = {
            to: result.email,
            subject: 'Subscription confirmation',
            text: 'Thanks for subscribing to Chocolate Euphoria! For this, we give you a promo code for a 10% discount: PROMO10',
            html: await renderTemplate('emailTemplate', { promoCode: 'PROMO10' })
        };

        await sendEmail(emailData);

        res.status(201).json(result);
    } catch (error) {
        next(error)
    }
}

export default subscribeUser;