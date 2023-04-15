const { Router } = require("express");
const {
    createAdminHandlers,
    adminProductIdHandler
} = require("../handlers/adminHandler");
const { verifyToken, isAdmin, verifyCrearAdmin } = require("../middlewares/userValidator");

const adminRouter = Router();

adminRouter.post("/registro",[verifyToken, isAdmin, verifyCrearAdmin], createAdminHandlers)
adminRouter.get("/product/:pruductId", adminProductIdHandler)


module.exports = adminRouter;