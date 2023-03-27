const { Product, TalleProduct, ColorProduct, CompraProducto, Cart, Promotions } = require("../db")

const createNewCart = async (userId, compraProductoId, promotionsId) => {
    let user = await LoginUser.findByPk(userId);
    let compraProducto = await CompraProducto.findByPk(compraProductoId);
    let promotion = await Promotions.findByPk(promotionsId);
    let newCart = await Cart.create();
    await newCart.setLoginUser(user);
    await newCart.setLoginUser(compraProducto);
    await newCart.setLoginUser(promotion);
    await user.addCart(newCart);
    await compraProducto.setCart(newCart);
    return newCart;
};

const getCartId = async (cartId) => {
    const allCarts = await getCarts();
    const cartById = allCarts.find(c => c.id === cartId);
    cartById ? cartById :
    new Error('Agregá productos a tu compra');
}

const getCarts = async () => {
    const carts = await Cart.findAll({
        include: [
            {
                model: CompraProducto,
                attributes: ['ProductId', 'TalleProductId', 'ColorProductId'],
                through: { attributes: [] },
            }
        ] 
    }) 
    return carts;
};

const updateCartId = async (cartId, compraProductoId) => {

};

const createCompraProducto = async (productId, talle, color, quantity) => {
    const talleProd = await TalleProduct.findOne({ where: { talle } });
    const colorProd = await ColorProduct.findOne({ where: { color } });
    const product = await Product.findByPk(productId);
    const newCompraProducto = await ColorProduct.create(quantity);
    await newCompraProducto.setTalleProduct(product);
    await newCompraProducto.setTalleProduct(talleProd.id);
    await newCompraProducto.setColorProduct(colorProd.id);
    return newCompraProducto
};

module.exports = {
    createNewCart,
    getCartId,
    updateCartId,
    createCompraProducto
}