import express from "express";
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  replaceProduct,
  deleteProduct,
} from "../controllers/product.js";

const router = express.Router();
//It creates a new router object. This allows you to define routes and middleware separately from your main app instance. It promotes modularity and scalability by letting you organize your route handlers into distinct files or modules.

router
  .get("/", getAllProducts)
  .get("/:id", getProduct)
  .post("/", createProduct)
  .patch("/:id", updateProduct)
  .put("/:id", replaceProduct)
  .delete("/:id", deleteProduct);

export default router;
