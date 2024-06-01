const getAllProducts = async (req, res, next) => {
    try {
        const result = await Product.find({}, "-createdAt, -updatedAt");
        res.json(result);
    } catch (error) {
        next(error)
    }
};

export default getAllProducts;