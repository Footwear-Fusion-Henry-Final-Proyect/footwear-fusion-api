const { Router } = require("express");
const { createProductHandler, getProductHandler, getProductIdHandler, updateProductHandler, productPunctuationHandler } = require("../handlers/productHandlers");
const { validateProduct } = require("../middlewares/productValidator");

const productRouter = Router();

productRouter.post("/",validateProduct, createProductHandler)
productRouter.get("/", getProductHandler)
productRouter.get("/punctuation",productPunctuationHandler)
productRouter.get("/:pruductId", getProductIdHandler)
productRouter.put("/:pruductId", updateProductHandler)

module.exports = productRouter;
