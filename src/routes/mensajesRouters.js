const { Router } = require("express");
const {
    mensajeBienvenidaHandlers,
    registroNewsletterHandlers,
    newsletterHandlers
} = require("../handlers/mensajesHandlers");
const { verifyToken, isAdmin } = require("../middlewares/userValidator");

const correoRouter = Router();

correoRouter.post("/bienvenida",[verifyToken, isAdmin],mensajeBienvenidaHandlers)
correoRouter.post("/registroNewsletter",[verifyToken, isAdmin],registroNewsletterHandlers)
correoRouter.post("/newsletter",[verifyToken, isAdmin],newsletterHandlers)


module.exports = correoRouter;