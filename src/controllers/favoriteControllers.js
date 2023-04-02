const {
    Product,
    LoginUser
} = require("../db")

//Para agragar los favoritos del usuario con el metodo addProduct() que se crea de la relacion de las tablas
const guardarFavorite = async (userId, productId) => {
    const user = await LoginUser.findByPk(userId);
    const product = await Product.findByPk(productId);
    await user.addProduct(product);
    return product;
}

//Para traer los favoritos del usuario con el metodo getProducts() que se crea de la relacion de las tablas
const getFavoritos = async (userId) => {
    const user = await LoginUser.findByPk(userId);
    console.log(userId);
    const favoritos = await user.getProducts({ attributes: ['title', 'image', 'price'], through: {attributes: []} });
    return favoritos
}
//para remover un usuario, se usa el metodo removeProduct() que se crea de la relacion de las tablas
const deleteFavorito = async (userId, productId) => {
    const user = await LoginUser.findByPk(userId);
    const product = await Product.findByPk(productId);
    await user.removeProduct(product);
    return product;
  }

//Para eliminar todos los favoritos del usuario setiando la tabla de nuevo a un array vacio setProducts([])
const vaciarFavoritos = async (userId) => {
    console.log(userId)
    const user = await LoginUser.findByPk(userId);
    const product = []
    await user.setProducts(product);
    return user
  }

module.exports = {
    guardarFavorite,
    getFavoritos,
    deleteFavorito,
    vaciarFavoritos
}