import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  replaceUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();
//It creates a new router object. This allows you to define routes and middleware separately from your main app instance. It promotes modularity and scalability by letting you organize your route handlers into distinct files or modules.

router
  .get("/", getAllUsers)
  .post("/", createUser)
  .patch("/:id", updateUser)
  .put("/:id", replaceUser)
  .delete("/:id", deleteUser);

export default router;
