const { Router } = require("express");
const {
  getUsersHandler,
  postUserHandler,
  postRegistroHandller,
  postLoginUser,
  postLoginGoogle,
} = require("../handlers/userHandlers");
const { verifyToken, isAdmin } = require("../middlewares/userValidator");

const userRouter = Router();

userRouter.post("/registro", postRegistroHandller)
userRouter.post("/login", postLoginUser)
userRouter.post("/google", postLoginGoogle)
userRouter.get("/",[verifyToken, isAdmin], getUsersHandler);
userRouter.post("/:id", postUserHandler);

module.exports = userRouter;
