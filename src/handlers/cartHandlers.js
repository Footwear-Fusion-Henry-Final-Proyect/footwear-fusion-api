const { createNewCart, getCartId, updateCartId, updateUserCart, getAllCarts } = require("../controllers/cartControllers")
const { Product, TalleProduct, ColorProduct, CompraProducto, Cart, Promotions, LoginUser } = require("../db")

// const selectCartHandler = async (req, res) => {
//     try {
//         const loginUserId = req.params.loginUserId
//         const productId = req.params.productId
//         const { talle, color, quantity, promoCode } = req.body;
//         let userCart = await Cart.findOne({ where: { LoginUserId: loginUserId } });
//         !userCart ? 
//         userCart = await createNewCart(loginUserId, productId, talle, color, quantity, promoCode) : 
//         userCart = await updateUserCart(userCart.id, productId, talle, color, quantity, promoCode);
//         res.status(201).json(newCart)
//     } catch (error) {
//         res.status(404).json({ error: error.message });
//     }
// };

const createCartHandler = async (req, res) => {
    try {
        const loginUserId = req.params.loginUserId
        const productId = req.params.productId
        const { talle, color, quantity, promoCode } = req.body;
        const newCart = await createNewCart(loginUserId, productId, talle, color, quantity, promoCode);
        res.status(201).json(newCart)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllCartsHandler = async (req, res) => {
    try {
        const loginUserId = req.params.loginUserId; //token o validación para administrador
        const loginUser = await LoginUser.findByPk(loginUserId);
        loginUser.RoleId === 'administrador' ? getAllCarts() : 'Usuario no autorizado'
        res.status(201).json(allCarts)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getCartIdHandler = async (req, res) => {
    try {
        const loginUserId = req.params.loginUserId;
        console.log(loginUserId);
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
    getAllCartsHandler
}
