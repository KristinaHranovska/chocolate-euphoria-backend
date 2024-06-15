// import { Promocode } from "../../models/promocode.js";
// import HttpError from "../../helper/HttpError.js";

import promocode from "./promocode.js";

const getRandomPromoCode = () => {
    // try {
    //     const promocodes = await Promocode.find();

    //     if (!promocodes || promocodes.length === 0) {
    //         throw HttpError(404, "No promo codes found");
    //     }

    const randomIndex = Math.floor(Math.random() * promocode.length);
    return promocode[randomIndex];
    // } catch (error) {
    //     throw error;
    // }
}

export default getRandomPromoCode;