const { Router } = require("express");
const { createCartHandler, getCartIdHandler, updateCartIdHandler } = require("../handlers/cartHandlers");

const cartRouters = Router();

cartRouters.post("/:loginUserId/:productId", createCartHandler)
cartRouters.get("/:loginUserId", getCartIdHandler)
cartRouters.put("/:cartId", updateCartIdHandler)

module.exports = cartRouters;
