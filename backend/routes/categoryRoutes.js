import express from "express";
const router = express.Router();
import {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory,
} from "../controllers/categoryController.js";

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

router.post("/", authenticate, authorizeAdmin, createCategory);
router.put("/:categoryId", authenticate, authorizeAdmin, updateCategory);
router.delete("/:categoryId", authenticate, authorizeAdmin, removeCategory);

router.get("/categories", listCategory);
router.get("/:id", readCategory);

export default router;
