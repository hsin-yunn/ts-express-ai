import express from "express";
import type { Router } from "express";
import { generateResponse } from "../controllers/geminiController";
const router: Router = express.Router();

router.post("/generate", generateResponse);

export default router;
