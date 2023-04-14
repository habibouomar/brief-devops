import express from "express";
import { getProducts, postProduct, deleteProductById, getProductById} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts)
router.post("/", postProduct)
router.get("/delete-product/:id", getProductById)
router.post("/delete-product/:id", deleteProductById)

export default router;