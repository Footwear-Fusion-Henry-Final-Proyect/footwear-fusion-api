const {createCompraProducto, updateCompraProducto, deleteCompraProducto} = require('../controllers/compraProductoControllers')
const { Product, TalleProduct, ColorProduct, CompraProducto, Cart, Promotions } = require("../db")

const createCompraProductoHandler = async (req, res) => {
    // try {
    //     const loginUserId = req.params.loginUserId;
    //     const { productId, talle, color, quantity } = req.body;
    //     const newCompraProducto = await createCompraProducto(productId, talle, color, quantity)
    //     res.status(201).json(newCompraProducto)
    // } catch (error) {
    //     res.status(404).json({ error: error.message })
    // }
}

const updateCompraProductoHandler = async (req, res) => {
    try {
        const compraProductoId = req.params.compraProductoId;
        const { talle, color, quantity } = req.body;
        const updatedCompraProducto = await updateCompraProducto(compraProductoId, talle, color, quantity)
        res.status(201).json(updatedCompraProducto)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const deleteCompraProductoHandler = async (req, res) => {
    try {
        const loginUserId = req.params.loginUserId;
        const { id, talle, qty } = req.body; 
        await deleteCompraProducto(loginUserId, id, talle, qty);
        res.status(201).json("Producto eliminado del carrito!")
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    createCompraProductoHandler,
    updateCompraProductoHandler,
    deleteCompraProductoHandler
}
