const { Product, TalleProduct, ColorProduct, CompraProducto, Cart, Promotions, LoginUser, DataUser, OrdenCompra, MarcaProduct } = require("../db");
const { idCart } = require("./cartControllers");


const createOrdenCompra = async (address, promotion, payment, orderStatus, total, userId) => {
    const cart = await idCart(userId)
    const user = await LoginUser.findByPk(userId);
    console.log(address, promotion, payment, orderStatus, total);
    if (cart && user) {
        const newOrden = await OrdenCompra.create({
            address: address,
            promotion: promotion,
            payment: payment,
            orderStatus: orderStatus,
            total: total
        });
        console.log("newOrden", newOrden);
        newOrden.setCart(cart.id);
        cart.setOrdenCompra(newOrden)
        newOrden.setLoginUser(user);
        return newOrden
    }
};

const updateOrdenCompra = async () => {

};

// const getOrdenesCompra = async (loginUserId) => {
//     const allOrdenesCompraUser = await OrdenCompra.findAll({
//         where: {
//             LoginUserId: loginUserId,
//         }
//     })
//     const allComprasProductUser = await Promise.all(allOrdenesCompraUser.map(async (oc) => (oc.comprasProducto)= {
//         let compras = await CompraProducto.findAll({
//             where: {
//                 CartId: oc.CartId
//             }, 
//             include: [
//                 {
//                     model: Product,
//                     attributes: ['title', 'price', 'image', 'code'],
//                     include: [
//                         {
//                             model: MarcaProduct,
//                             attributes: ['name'],
//                             through: { attributes: [] },
//                         }]
//                 }, {
//                     model: TalleProduct,
//                     attributes: ['talle'],
//                 }, {
//                     model: ColorProduct,
//                     attributes: ['color'],
//                 }
//             ]
//         });
//         return compras;
//     }));
// return allComprasProductUser
// };

const getOrdenesCompra = async (loginUserId) => {
    let allOrdenesCompraUser;
    loginUserId ? allOrdenesCompraUser = await OrdenCompra.findAll({
        where: { LoginUserId: loginUserId }}) : 
    allComprasProductUser  = await OrdenCompra.findAll();

    const allComprasProductUser = await Promise.all(
        allOrdenesCompraUser.map(async (oc) => {
            const compras = await CompraProducto.findAll({
                where: {
                    CartId: oc.CartId
                }, 
                include: [
                    {
                        model: Product,
                        attributes: ['title', 'price', 'image', 'code'],
                        include: [
                            {
                                model: MarcaProduct,
                                attributes: ['name'],
                                through: { attributes: [] },
                            }
                        ]
                    }, {
                        model: TalleProduct,
                        attributes: ['talle'],
                    }, {
                        model: ColorProduct,
                        attributes: ['color'],
                    }
                ]
            });

            oc.dataValues.comprasProducto = compras; // Asignar la propiedad `comprasProducto` al objeto `oc`
            console.log(oc); 
            return oc;
        })
    );

    return allComprasProductUser;
};

const deleteOrdenCompra = async () => {

};

module.exports = {
    createOrdenCompra,
    updateOrdenCompra,
    getOrdenesCompra,
    deleteOrdenCompra
}