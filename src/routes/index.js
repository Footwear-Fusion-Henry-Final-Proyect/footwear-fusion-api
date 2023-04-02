const { Router } = require('express');
const productRouter = require("./productRouters");
const userRouter = require("./userRouters");
const reviewsRouter = require("./reviewsRouter");
const filterRouter = require("./arrFilterRouters");
const newsletterRouter = require("./newsletterRouter");
const favoriteRouters = require("./favoriteRouters");
const cartRouters = require("./cartRouters");
const compraProductoRouters = require("./compraProductoRouters");
const ordenCompraRouters = require("./ordenCompraRouters");
const preciosRouters = require("./preciosRouters");

const router = Router();

router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/reviews', reviewsRouter);
router.use('/filter', filterRouter);
router.use("/newsletter", newsletterRouter);
router.use("/favorite", favoriteRouters)
router.use('/cart', cartRouters);
router.use('/compraproducto', compraProductoRouters);
router.use('/ordencompra', ordenCompraRouters);
router.use('/precios', preciosRouters);

module.exports = router;