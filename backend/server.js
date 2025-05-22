import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server stated at http://localhost:5000");
});

// mohammadkazimamiri2001
// SYi6Q6qUn6TtUt9z
