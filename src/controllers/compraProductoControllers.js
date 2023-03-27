const { Product, TalleProduct, ColorProduct, CompraProducto, Cart } = require("../db");

const createCompraProducto = async (productId, talle, color, quantity) => {
    const talleProd = await TalleProduct.findOne({ where: { talle } });
    const colorProd = await ColorProduct.findOne({ where: { color } });
    const product = await Product.findByPk(productId);
    const newCompraProducto = await CompraProducto.create(quantity);
    await newCompraProducto.setTalleProduct(product);
    await newCompraProducto.setTalleProduct(talleProd.id);
    await newCompraProducto.setColorProduct(colorProd.id);
    return newCompraProducto
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

const deleteCompraProducto = async (compraProductoId) => {
    await CompraProducto.destroy({ where: { id: compraProductoId } })
    return 'Se eliminó producto de su compra'
}

module.exports = {
    createCompraProducto,
    updateCompraProducto,
    deleteCompraProducto
}