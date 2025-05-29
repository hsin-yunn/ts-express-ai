import express from 'express';
import type { Request,Response,Router } from 'express';
import { generateResponse, getHistory } from '../controllers/generateController';
const router: Router = express.Router();


router.post('/generate', generateResponse);

router.get('/generate', getHistory);

export default router;
