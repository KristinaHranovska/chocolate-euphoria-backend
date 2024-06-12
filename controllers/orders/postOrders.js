import { Order } from "../../models/order.js";

const postOrders = async (req, res, next) => {
    try {
        const result = await Order.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error)
    }
}

export default postOrders;