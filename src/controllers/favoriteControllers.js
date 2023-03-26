const {
    Product,
    LoginUser
} = require("../db")

const guardarFavorite = async (userId, productId) => {
    const user = await LoginUser.findByPk(userId);
    const product = await Product.findByPk(productId);
    await user.addProduct(product);
    return product;
}

const getFavoritos = async (userId) => {
    const user = await LoginUser.findByPk(userId);
    console.log(userId);
    const favoritos = await user.getProducts();
    return favoritos
}

module.exports = {
    guardarFavorite,
    getFavoritos
}