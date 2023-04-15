const { Router } = require("express");
const {
  getUsersHandler,
  postUserHandler,
  postRegistroHandller,
  postLoginUser,
  postLoginGoogle,
 updateUser,
 updateUserDataHandler,
 updateAddressHandler,
 updatePhoneHandler,
 updateStateHandler,
 getDataUserHandler
} = require("../handlers/userHandlers");


const { verifyToken, isAdmin, verifyDataUser, verifyEmail } = require("../middlewares/userValidator");

const userRouter = Router();

userRouter.post("/registro",verifyEmail, postRegistroHandller)
userRouter.post("/login", postLoginUser)
userRouter.post("/google", postLoginGoogle)
userRouter.post("/:id",[verifyToken, verifyDataUser], postUserHandler);
userRouter.post("/google", postLoginGoogle)
userRouter.get("/",[verifyToken, isAdmin], getUsersHandler);
userRouter.get("/datos/:userId", [verifyToken], getDataUserHandler)
userRouter.put("/:id", updateUser);//userRouter.put("/:id", updateUser);
userRouter.put("/data/:id", updateAddressHandler, updatePhoneHandler, updateStateHandler)//[verifyToken, isAdmin]


module.exports = userRouter;

