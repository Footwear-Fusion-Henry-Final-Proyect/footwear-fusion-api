const { Router } = require("express");
const { createCompraProductoHandler, updateCompraProductoHandler, deleteCompraProductoHandler } = require("../handlers/compraProductoHandlers");

const compraProductoRouters = Router();

compraProductoRouters.post("/", createCompraProductoHandler)
// compraProductoRouters.get("/:cartId", getCartIdHandler)
compraProductoRouters.put("/:cartId", updateCompraProductoHandler)
compraProductoRouters.delete("/:cartId", deleteCompraProductoHandler)

module.exports = compraProductoRouters;