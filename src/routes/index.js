const { Router } = require('express');
const productRouter = require("./productRouters");
const userRouter = require("./userRouters");
const reviewsRouter = require("./reviewsRouter");
const filterRouter = require("./arrFilterRouters");
const newsletterRouter = require("./newsletterRouter");

const router = Router();

router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/reviews', reviewsRouter);
router.use('/filter', filterRouter);
router.use("/newsletter", newsletterRouter)

module.exports = router;