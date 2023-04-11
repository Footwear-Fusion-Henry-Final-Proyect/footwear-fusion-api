const { Router } = require("express");
const { createCartHandler, getCartIdHandler, updateCartIdHandler,getCartIDdHandler } = require("../handlers/cartHandlers");

const cartRouters = Router();

cartRouters.post("/:loginUserId", createCartHandler)
cartRouters.get("/:loginUserId", getCartIdHandler)
cartRouters.put("/:cartId", updateCartIdHandler)
cartRouters.get("/cartId/:loginUserId", getCartIDdHandler)

module.exports = cartRouters;
