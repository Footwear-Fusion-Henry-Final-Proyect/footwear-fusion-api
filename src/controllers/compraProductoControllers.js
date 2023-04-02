const { Product, TalleProduct, ColorProduct, CompraProducto, Cart } = require("../db");

const createCompraProducto = async (productId, talleProd, colorProd, quantity) => {
    // const product = await Product.findByPk(productId);
    // const newCompraProducto = await CompraProducto.create(quantity);
    // await newCompraProducto.setTalleProduct(talleProd);
    // await newCompraProducto.setColorProduct(colorProd);
    // await newCompraProducto.setProduct(product);
    // return newCompraProducto;
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
    console.log(compraProductoId);
    await CompraProducto.destroy({ where: { id: compraProductoId } })
    return 'Se eliminó el producto de su compra'
}

module.exports = {
    createCompraProducto,
    updateCompraProducto,
    deleteCompraProducto
}