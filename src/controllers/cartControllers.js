const { Product, TalleProduct, ColorProduct, CompraProducto, Cart, Promotions, LoginUser } = require("../db")
const { createCompraProducto } = require("./compraProductoControllers")

const createNewCart = async (loginUserId, productId, talle, color, quantity, promoCode) => {
    let userCompra = await LoginUser.findByPk(loginUserId);
    let talleProd = await TalleProduct.findOne({ where: { talle: talle } });
    let colorProd = await ColorProduct.findOne({ where: { color: color } });
    let newCompraProducto = await createCompraProducto(productId, talleProd, colorProd, quantity);
    let newCart = await Cart.create();
    await newCart.setLoginUser(userCompra);
    await newCart.addCompraProducto(newCompraProducto);
    // await newCart.setPromotions(promotion);
    await userCompra.setCart(newCart);
    await newCompraProducto.setCart(newCart);
    return newCart;
};

const getCartId = async (loginUserId) => {
    // const allCarts = await getCarts();
    const cartById = Cart.findOne({ where: { loginUserId: loginUserId }, 
        include: [
            {
                model: CompraProducto,
                attributes: ['ProductId', 'TalleProductId', 'ColorProductId', 'quantity'],
                through: { attributes: [] },
            }
        ]
    });
    cartById ? cartById :
        new Error('Agregá productos a tu compra');
}

// const getCarts = async () => {
//     const carts = await Cart.findAll({
//         include: [
//             {
//                 model: CompraProducto,
//                 attributes: ['ProductId', 'TalleProductId', 'ColorProductId'],
//                 through: { attributes: [] },
//             }
//         ]
//     })
//     return carts;
// };

const updateCartId = async (cartId, compraProductoId) => {

};

module.exports = {
    createNewCart,
    getCartId,
    updateCartId
}