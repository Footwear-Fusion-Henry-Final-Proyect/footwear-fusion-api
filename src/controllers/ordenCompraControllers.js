const { Product, TalleProduct, ColorProduct, CompraProducto, Cart, Promotions, LoginUser, DataUser, OrdenCompra } = require("../db");
const { idCart } = require("./cartControllers");


const createOrdenCompra = async (address, promotion, payment, orderStatus, total, userId) => {
    const cart = await idCart(userId)
    const user = await LoginUser.findByPk(userId);
    if(cart && user) {
        const newOrden = await OrdenCompra.create({
            address: address,
            promotion: promotion,
            payment: payment,
            orderStatus: orderStatus,
            total: total
          });
          newOrden.setCart(cart.id);
          cart.setOrdenCompra(newOrden)
          newOrden.setLoginUser(user);
          return newOrden
    }
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