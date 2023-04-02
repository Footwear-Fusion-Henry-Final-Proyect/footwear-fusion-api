const { Router } = require("express");
const {createFavoriteHandlers, getFovoritoHandlers} = require("../handlers/favoriteHandlers");

const favoriteRouters = Router();

favoriteRouters.post("/:userId/:productId",createFavoriteHandlers)
favoriteRouters.get("/:userId",getFovoritoHandlers)

module.exports = favoriteRouters
