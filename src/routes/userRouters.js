const { Router } = require("express");
const {
  getUsersHandler,
  postUserHandler,
  postRegistroHandller,
  postLoginUser,
  postLoginGoogle,
 updateUser,
 getDataUserHandler
} = require("../handlers/userHandlers");


const { verifyToken, isAdmin } = require("../middlewares/userValidator");

const userRouter = Router();

userRouter.post("/registro", postRegistroHandller)
userRouter.post("/login", postLoginUser)
userRouter.post("/google", postLoginGoogle)
userRouter.post("/:id", postUserHandler);
userRouter.post("/google", postLoginGoogle)
userRouter.get("/",[verifyToken, isAdmin], getUsersHandler);
//userRouter.put("/:id", updateUser);

userRouter.put("/:id",[verifyToken, isAdmin], updateUser);
userRouter.get("/datos/:id", getDataUserHandler)

module.exports = userRouter;
