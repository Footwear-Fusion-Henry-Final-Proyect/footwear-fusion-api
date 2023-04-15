const { Promotions, Cart } = require("../db");
const moment = require('moment');


const createPromotion = async (discount) => {
    const newPromo = await Promotions.create({
        discount
    })
    const promo = {
        code: newPromo.dataValues.code,
        discount : newPromo.dataValues.discount
    }
    return promo;
}

const getPromotion = async (code) => {
    // Obtener la fecha actual
    const currentDate = new Date();
    const codePromo = await Promotions.findOne({
        where: {
            code: code,
            current: true,
        }
    });
    if (!codePromo) { return 'Código inválido'};
    if (currentDate.getTime() < codePromo.expiration.getTime()) {
        return codePromo;
    } else {
        return 'Tu promo expiró';
    };
}

const updatePromotion = async (promotionId, cartId) => {
    const cartUser = await Cart.findByPk(cartId); // Obtener el cart
    const codePromo = await Promotions.findOne({
        where: {
            id: promotionId,
            current: true,
        }
    });; // Obtener la promo
    if (!cartUser) { return 'El usuario no tiene carrito'};
    if (!codePromo) { return 'Código inválido'};
    await codePromo.setCart(cartUser);
    codePromo.update({ current: false });
    return codePromo;
}

module.exports = {
    createPromotion,
    getPromotion,
    updatePromotion
}