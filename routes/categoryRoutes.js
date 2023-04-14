import express from "express";
import { getCategories, postCategory, updateCategoryById, deleteCategoryById} from "../controllers/CategoryController.js";

const router = express.Router();

router.get("/categories", getCategories )
router.post("/create-category", postCategory)
router.post("/update-category", updateCategoryById)
router.post("/delete-category", deleteCategoryById)

export default router;