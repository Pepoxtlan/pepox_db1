import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { 
    getSubjects, 
    getSubject, 
    deleteSubjects, 
    updateSubjects,
    createSubject 
} from "../controllers/subject.controllers.js";

const router = Router();

router.post('/subject', authRequired, createSubject); 

router.get('/subject', authRequired, getSubjects);
router.get('/subject/:id', authRequired, getSubject);
router.delete('/subject/:id', authRequired, deleteSubjects);
router.put('/subject/:id', authRequired, updateSubjects);

export default router;