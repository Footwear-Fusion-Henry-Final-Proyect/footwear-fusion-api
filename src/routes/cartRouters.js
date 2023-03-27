const { Router } = require("express");
const { createCartHandler, getCartIdHandler, updateCartIdHandler } = require("../handlers/cartHandlers");

const cartRouters = Router();

cartRouters.post("/", createCartHandler)
cartRouters.get("/:cartId", getCartIdHandler)
cartRouters.put("/:cartId", updateCartIdHandler)

module.exports = cartRouters;
