const { Router } = require("express");
const { createProductHandler, getProductHandler } = require("../handlers/productHandlers");

const productRouter = Router();

productRouter.post("/", createProductHandler)
productRouter.get("/", getProductHandler)

module.exports = productRouter;
