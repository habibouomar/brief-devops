import express from "express";
import { getCategories, postCategory, getCategoryById, updateCategoryById, deleteCategoryById} from "../controllers/categoryController.js";
import { getProductsByCategoryId } from "../controllers/productController.js";

const router = express.Router();

router.get("/categories", getCategories )
router.post("/categories", postCategory)
router.get("/categories/products-category/:id", getProductsByCategoryId)

router.get("/categories/update-category/:id", getCategoryById)
router.post("/categories/update-category/:id", updateCategoryById)

router.post("/delete-category", deleteCategoryById)

export default router;