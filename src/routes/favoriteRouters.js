const { Router } = require("express");
const {createFavoriteHandlers, getFovoritoHandlers, deletFavoritoHandler, deleteVaciarFavoritosHandler} = require("../handlers/favoriteHandlers");

const favoriteRouters = Router();

favoriteRouters.post("/:userId/:productId",createFavoriteHandlers)
favoriteRouters.get("/:userId",getFovoritoHandlers)
favoriteRouters.delete("/:userId/:productId",deletFavoritoHandler)
favoriteRouters.delete("/:userId",deleteVaciarFavoritosHandler)

module.exports = favoriteRouters
