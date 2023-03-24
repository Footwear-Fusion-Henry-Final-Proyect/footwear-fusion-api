const { Router } = require("express");
const { createProductHandler, getProductHandler, getProductIdHandler } = require("../handlers/productHandlers");

const productRouter = Router();

productRouter.post("/", createProductHandler)
productRouter.get("/", getProductHandler)
productRouter.get("/:pruductId", getProductIdHandler)

module.exports = productRouter;
