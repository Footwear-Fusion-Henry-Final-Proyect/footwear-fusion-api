const { Router } = require("express");
const { createPromotionsHandler, getPromotionsHandler, updatePromotionsHandler } = require("../handlers/promotionHandlers");

const promotionsRouter = Router();

promotionsRouter.post("/",createPromotionsHandler)
promotionsRouter.get("/:code", getPromotionsHandler)
promotionsRouter.put("/:promotionId/:cartId", updatePromotionsHandler)

module.exports = promotionsRouter;
