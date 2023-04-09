const { Router } = require("express");
const {
    createAdminHandlers,
    adminProductId
} = require("../handlers/adminHandler");
const { verifyToken, isAdmin } = require("../middlewares/userValidator");

const adminRouter = Router();

adminRouter.post("/registro",[verifyToken, isAdmin], createAdminHandlers)
adminRouter.get("/product/:pruductId", adminProductId)


module.exports = adminRouter;