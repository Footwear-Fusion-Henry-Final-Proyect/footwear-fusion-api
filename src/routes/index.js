const { Router } = require('express');
const productRouter = require("./productRouters");
const userRouter = require("./userRouters");
const reviewsRouter = require("./reviewsRouter");
const cartRouters = require("./cartRouters");
const compraProductoRouters = require("./compraProductoRouters");

const router = Router();

router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/reviews', reviewsRouter);
router.use('/cart', cartRouters);
router.use('/compraproducto', compraProductoRouters);

module.exports = router;