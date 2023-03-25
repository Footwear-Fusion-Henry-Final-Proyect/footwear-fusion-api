const { Router } = require("express");
const { getcolorHandlers, getTalleHandlers } = require("../handlers/arrFilterHandlers");

const filterRouter = Router();

filterRouter.get("/color",getcolorHandlers);
filterRouter.get("/talle", getTalleHandlers);


module.exports = filterRouter;