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


const { verifyToken, isAdmin, verifyDataUser, verifyEmail, isUserBlocked } = require("../middlewares/userValidator");

const userRouter = Router();

userRouter.post("/registro",verifyEmail, postRegistroHandller)
userRouter.post("/login", postLoginUser)
userRouter.post("/google", postLoginGoogle)
userRouter.post("/:id",[verifyToken, verifyDataUser, isUserBlocked], postUserHandler);
userRouter.get("/",[verifyToken, isAdmin, isUserBlocked], getUsersHandler);
userRouter.get("/datos/:userId", [verifyToken, isUserBlocked], getDataUserHandler)
userRouter.put("/:id", [verifyToken, isUserBlocked],updateUser);//userRouter.put("/:id", updateUser);
userRouter.put("/data/:id", updateAddressHandler, updatePhoneHandler, updateStateHandler)//[verifyToken, isAdmin]


module.exports = userRouter;

