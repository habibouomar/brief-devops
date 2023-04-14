import express from "express";
import { getCategories, postCategory, updateCategoryById, deleteCategoryById} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/categories", getCategories )
router.post("/categories", postCategory)
router.post("/update-category", updateCategoryById)
router.post("/delete-category", deleteCategoryById)

export default router;