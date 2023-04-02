const { guardarFavorite, getFavoritos } = require("../controllers/favoriteControllers");

const createFavoriteHandlers = async (req, res) => {
    try {
        const userId = req.params.userId
        const productId = req.params.productId
        const favorite = await guardarFavorite(userId, productId);
        res.status(201).json(favorite)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getFovoritoHandlers = async (req, res) => {
    try {
        const userId = req.params.userId
        console.log(userId);
        const favorito = await getFavoritos(userId);
        res.status(200).json(favorito)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    createFavoriteHandlers,
    getFovoritoHandlers
}