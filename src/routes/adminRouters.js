const { Router } = require("express");
const {
    createAdminHandlers,
    adminProductIdHandler
} = require("../handlers/adminHandler");
const { verifyToken, isAdmin } = require("../middlewares/userValidator");

const adminRouter = Router();

adminRouter.post("/registro",[verifyToken, isAdmin], createAdminHandlers)
//adminRouter.post("/registro", createAdminHandlers)
//adminRouter.get("/product/:pruductId", adminProductIdHandler)

module.exports = adminRouter;