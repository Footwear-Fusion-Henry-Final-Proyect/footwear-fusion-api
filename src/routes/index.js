const { Router } = require('express');
const productRouter = require("./productRouters");
const userRouter = require("./userRouters");
const reviewsRouter = require("./reviewsRouter");

const router = Router();

router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;