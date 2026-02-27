import { Router } from "express";
import { createSubject, getSubjects } from "../controllers/subject.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post('/subject', authRequired, createSubject);
router.get('/subject', authRequired, getSubjects);  

export default router;