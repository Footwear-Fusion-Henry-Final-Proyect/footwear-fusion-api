const { Router } = require('express');
const productRouter = require("./productRouter");
const userRouter = require("./userRouters");

const router = Router();

router.use('/product', productRouter);
router.use('/user', userRouter);

module.exports = router;