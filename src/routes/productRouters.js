const { Router } = require("express");
const { createProductHandler, getProductHandler, getProductIdHandler, updateProductHandler } = require("../handlers/productHandlers");
const { validateProduct } = require("../middlewares/productValidator");

const productRouter = Router();

productRouter.post("/",validateProduct, createProductHandler)
productRouter.get("/", getProductHandler)
productRouter.get("/:pruductId", getProductIdHandler)
productRouter.put("/:pruductId", updateProductHandler)

module.exports = productRouter;
