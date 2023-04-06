const { Product, TalleProduct, ColorProduct, CompraProducto, Cart } = require("../db");

const createCompraProducto = async (id, talleProd, colorProd, qty) => {
    const product = await Product.findByPk(id);
    console.log(qty, talleProd, colorProd, 'compraProductoController');
    const newCompraProducto = await CompraProducto.create(qty);
    await newCompraProducto.setProduct(product);
    await newCompraProducto.setTalleProduct(talleProd);
    if (colorProd.keys(objeto).length !== 0) await newCompraProducto.setColorProduct(colorProd);
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