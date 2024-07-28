import express from "express";
import morgan from "morgan";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/product.js";

const app = express();

// Middleware for body parser
app.use(express.json());
app.use(morgan('dev'));

// Use routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
