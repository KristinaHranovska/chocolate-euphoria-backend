import HttpError from "../helper/HttpError";

const getOneProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Product.findById(id);
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
}

export default getOneProduct;