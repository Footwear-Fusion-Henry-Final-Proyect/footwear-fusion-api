const { Router } = require("express");
const { registroNewsletter, getNewsletterHandlers } = require("../handlers/newsletterHandlers");

const newsletterRouter = Router();

newsletterRouter.post("/", registroNewsletter);
newsletterRouter.get("/", getNewsletterHandlers);

module.exports = newsletterRouter;
