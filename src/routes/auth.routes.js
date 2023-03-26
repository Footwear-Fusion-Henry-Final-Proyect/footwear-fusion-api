
import { Router } from "express";
const router = Router();
import * as authCtrl from "../controllers/auth.controllers";
import { verifiRolesExiste, verifiUserExiste } from "../Middlewares/verifSingUp";



router.post("/signUp",[verifiUserExiste, verifiRolesExiste],authCtrl.singUp)

router.post("/signIn", authCtrl.singIn)

export default router;