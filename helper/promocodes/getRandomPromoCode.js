import { Promocode } from "../../models/promocode.js";
import HttpError from "../../helper/HttpError.js";

const getRandomPromoCode = async (req, res, next) => {
    try {
        const promocodes = await Promocode.find();

        if (!promocodes || promocodes.length === 0) {
            throw HttpError(404, "No promo codes found");
        }

        const randomIndex = Math.floor(Math.random() * promocodes.length);
        return promocodes[randomIndex].promocode;
    } catch (error) {
        next(error)
    }
}

export default getRandomPromoCode;