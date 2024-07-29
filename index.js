import express from "express";
import morgan from "morgan";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/product.js";
import connectDB from "./config/db.js";
import cors from "cors";
import jwt from 'jsonwebtoken';

const app = express();

// Middleware for body parser
app.use(express.json());
app.use(morgan("dev"));
app.use(cors()); //Enabling API to be accessible from different origins

// Connect to Database
connectDB();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Use routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
