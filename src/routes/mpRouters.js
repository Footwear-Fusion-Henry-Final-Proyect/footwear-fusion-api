const { Router } = require("express");
const { createPreferenceHandlers, getStatusCompra, handleSuccess } = require("../handlers/mpHandlers");
const { verifyToken } = require("../middlewares/userValidator");

const mpRouters = Router();

mpRouters.post("/create_preference", createPreferenceHandlers)
mpRouters.get("/compra/:id", getStatusCompra)
mpRouters.get("/success", handleSuccess)


module.exports = mpRouters