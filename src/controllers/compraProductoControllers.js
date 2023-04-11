const { Product, TalleProduct, ColorProduct, CompraProducto, Cart } = require("../db");

const createCompraProducto = async (id, talleProd, colorProd, qty) => {
    const product = await Product.findByPk(id);
    const newCompraProducto = await CompraProducto.create({qty});
    await newCompraProducto.setProduct(product);
    await newCompraProducto.setTalleProduct(talleProd);
    if (Object.keys(colorProd).length !== 0) await newCompraProducto.setColorProduct(colorProd);
    return newCompraProducto;
};

const updateCompraProducto = async (compraProductoId, talle, color, quantity) => {
    const newTalle = await TalleProduct.findOne({ where: { talle } });
    const newColor = await ColorProduct.findOne({ where: { color } });
    let updatedCompraProducto = await CompraProducto.update({
        TalleProductId: newTalle.id,
        ColorProductId: newColor.id,
        quantity: quantity
    },
        { where: { id: compraProductoId } })
    return updatedCompraProducto
}

const deleteCompraProducto = async (loginUserId, id, talle, qty) => {
    const userCart = await Cart.findOne({ where: { LoginUserId: loginUserId, OrdenCompraId: null } });
    const productTalle = await TalleProduct.findOne({ where: { talle: talle } });
    await CompraProducto.destroy({
        where: {CartId: userCart.dataValues.id, ProductId: id, TalleProductId: productTalle.id, qty: qty}
    })
    return "Producto eliminado del carrito!";
}

module.exports = {
    createCompraProducto,
    updateCompraProducto,
    deleteCompraProducto
}