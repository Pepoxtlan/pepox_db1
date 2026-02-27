import { authRequired } from "../middlewares/validateToken.js";
import { Router } from "express"
import { profile } from "../controllers/user.controller.js"
import { login, register} from "../controllers/user.controller.js";
import {logout} from "../controllers/user.controller.js"
const router=Router()
router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
router.get("/profile",authRequired,profile);

export default router