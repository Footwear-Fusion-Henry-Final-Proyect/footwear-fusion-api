const { Router } = require("express");
const { updateCompraProductoHandler, deleteCompraProductoHandler } = require("../handlers/compraProductoHandlers");

const compraProductoRouters = Router();

// compraProductoRouters.post("/", createCompraProductoHandler)
// compraProductoRouters.get("/:cartId", getCartIdHandler)
compraProductoRouters.put("/:loginUserId", updateCompraProductoHandler)
compraProductoRouters.delete("/:loginUserId", deleteCompraProductoHandler)

module.exports = compraProductoRouters;