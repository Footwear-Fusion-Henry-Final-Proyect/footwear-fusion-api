const { Router } = require("express");
const { getcolorHandlers } = require("../handlers/colorHandlers");

const colorRouter = Router();

colorRouter.get("/",getcolorHandlers)

module.exports = colorRouter;