const { Product, TalleProduct, ColorProduct, CompraProducto, Cart, Promotions, LoginUser, DataUser, OrdenCompra } = require("../db")


const createOrdenCompra = async (address, promotion, createdAt, payment, orderStatus, total, cartId, userId) => {
    const cart = await Cart.findByPk(cartId);
    const user = await LoginUser.findByPk(userId);
    console.log(address, promotion, createdAt, payment, orderStatus, total, cartId, userId);
    const newOrden = await OrdenCompra.create({
        address: address,
        promotion: promotion,
        createdAt: createdAt,
        payment: payment,
        orderStatus: orderStatus,
        total: total
      });
    newOrden.setCart(cart);
    cart.setOrdenCompra(newOrden)
    newOrden.setLoginUser(user);
    return newOrden
};

const updateOrdenCompra = async () => {

};

const getOrdenCompra = async () => {

};

const deleteOrdenCompra = async () => {

};

module.exports = {
    createOrdenCompra, 
    updateOrdenCompra, 
    getOrdenCompra, 
    deleteOrdenCompra
}