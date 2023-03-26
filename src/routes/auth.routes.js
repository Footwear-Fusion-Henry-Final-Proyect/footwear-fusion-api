
import { Router } from "express";
import { singIn, singUp } from "../Controllers/auth.controllers";
import { verifiRolesExiste, verifiUserExiste } from "../Middlewares/verifSingUp";


const router = Router();

router.post("/signUp",[verifiUserExiste, verifiRolesExiste],singUp)

router.post("/signIn", singIn)

export default router;