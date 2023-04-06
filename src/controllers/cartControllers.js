const { Product, TalleProduct, ColorProduct, CompraProducto, Cart, Promotions, LoginUser, DataUser } = require("../db")
const { createCompraProducto } = require("./compraProductoControllers")

const createNewCart = async (loginUserId, id, size, description, qty, color, promoCode) => {
    let colorProd = {};
    let promotion = {};
    let userCompra = await LoginUser.findByPk(loginUserId);
    if (color) colorProd = await ColorProduct.findOne({ where: { color: color } });
    let talleProd = await TalleProduct.findOne({ where: { talle: size } });
    if (promoCode) promotion = await Promotions.findOne({ where: { code: promoCode } });
    let newCompraProducto = await createCompraProducto(id, talleProd, colorProd, qty);
    let userCart = await Cart.findOne({ where: { LoginUserId: loginUserId, OrdenCompraId: null } });
    !userCart ? currentCart = await Cart.create() : currentCart = userCart
    await currentCart.setLoginUser(userCompra);
    await currentCart.addCompraProducto(newCompraProducto);
    if (promotion) await currentCart.addPromotions(promotion);
    await userCompra.setCart(currentCart);
    await newCompraProducto.setCart(currentCart);
    return currentCart;
};

const getCartId = async (loginUserId) => {
    const cartById = await Cart.findOne({ where: { LoginUserId: loginUserId } });
    const comprasProductosUserId = await CompraProducto.findAll({ where: { CartId: cartById.id },
    // include: [
    //     {
    //         model: Product,
    //         attributes: ['title', 'price', 'image', 'code'],
    //         through: { attributes: [] }
    //     },{
    //         model: TalleProduct,
    //         attributes: ['talle'],
    //         through: { attributes: [] }
    //     },{
    //         model: ColorProduct,
    //         attributes: ['color'],
    //         through: { attributes: [] }
    //     }
    // ]
  });
    return comprasProductosUserId
}

const getAllCarts = async () => { //falta validación con token
    const allCarts = await Cart.findAll({
        include: [
            {
                model: CompraProducto,
                attributes: ['ProductId', 'TalleProductId', 'ColorProductId', 'Promotions'],
                through: { attributes: [] }
            }, {
                model: LoginUser,
                attributes: ['id'],
                through: { attributes: [] },
            }
        ]
    })
    return allCarts;
};

const updateUserCart = async (productId, talle, color, quantity, promoCode) => {

};

const updateCartId = async (cartId, compraProductoId) => {

};

module.exports = {
    createNewCart,
    getCartId,
    updateCartId,
    updateUserCart,
    getAllCarts
}