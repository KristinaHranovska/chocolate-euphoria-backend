import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";
import specs from './swagger.js';
import swaggerUi from 'swagger-ui-express';

import productsRouter from "./routes/productsRouter.js";
import reviewsRouter from "./routes/reviewsRouter.js";
import subscribeRouter from "./routes/subscribeRouter.js";

export const app = express();
const { DB_HOST, PORT } = process.env;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use("/products", productsRouter);
app.use("/reviews", reviewsRouter);
app.use("/subscribe", subscribeRouter);

app.use((_, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Database connection successful");
        });
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    })