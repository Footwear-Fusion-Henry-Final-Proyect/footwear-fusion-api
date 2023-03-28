const { createNewCart, getCartId, updateCartId } = require("../controllers/cartControllers")
const { Product, TalleProduct, ColorProduct, CompraProducto, Cart, Promotions } = require("../db")

const createCartHandler = async (req, res) => {
    try {
        const loginUserId = req.params.loginUserId
        const productId = req.params.productId
        const { talle, color, quantity } = req.body;
        const newCart = await createNewCart(loginUserId, productId, talle, color, quantity);
        res.status(201).json(newCart)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getCartIdHandler = async (req, res) => {
    try {
        const loginUserId = req.params.loginUserId;
        const cart = await getCartId(loginUserId);
        res.status(201).json(cart)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


const updateCartIdHandler = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const compraProductoId = req.params.compraProductoId;
        const updatedCart = await updateCartId(cartId, compraProductoId);
        res.status(201).json(updatedCart)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
};

module.exports = {
    createCartHandler,
    getCartIdHandler,
    updateCartIdHandler,
}
