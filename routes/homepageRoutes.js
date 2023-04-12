import express from "express";
import { getHomepage } from "../controllers/homepageController";

const router = express.Router();

router.get("/", getHomepage)

export default router;