const { Router } = require("express");
const { getUsersHandler, postUserHandler} = require("../handlers/userHandlers");

const userRouter = Router();


userRouter.get('/', getUsersHandler);
userRouter.post('/', postUserHandler);

module.exports = userRouter;