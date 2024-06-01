import { Product } from "../models/produst.js";

const getAllProducts = async (req, res, next) => {
    try {
        const result = await Product.find();
        res.json(result);
    } catch (error) {
        next(error)
    }
};

export default getAllProducts;