const { Router } = require("express");
const { registroNewsletter, getNewsletterHandlers } = require("../handlers/newsletterHandlers");
const { verifyToken, isAdmin, verifyEmail } = require("../middlewares/userValidator");
const newsletterRouter = Router();

newsletterRouter.post("/", [verifyEmail],registroNewsletter);
newsletterRouter.get("/", [verifyToken, isAdmin], getNewsletterHandlers);

module.exports = newsletterRouter;
