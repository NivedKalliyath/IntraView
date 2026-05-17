// backend/src/routes/codeRoutes.js
import express from "express";
import { executeCode } from "../controllers/codeController.js";

const router = express.Router();

router.post("/execute", executeCode);

export default router;