const { Router } = require("express");
const {
    createAdminHandlers
} = require("../handlers/adminHandler");
const { verifyToken, isAdmin } = require("../middlewares/userValidator");

const adminRouter = Router();

adminRouter.post("/registro",[verifyToken, isAdmin], createAdminHandlers)


module.exports = adminRouter;