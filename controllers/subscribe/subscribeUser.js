import { Subscribe } from "../../models/subscribe.js";

const subscribeUser = async (req, res, next) => {
    try {
        const result = await Subscribe.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error)
    }
}

export default subscribeUser;