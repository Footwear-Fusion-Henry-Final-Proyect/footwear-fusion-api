<<<<<<< HEAD
const { Router } = require("express");
const { createPreferenceHandlers, feedbackHandlers } = require("../handlers/mpHandlers");

const mpRouters = Router();

mpRouters.post("/create_preference", createPreferenceHandlers)
mpRouters.get("/feedback", feedbackHandlers)

=======
const { Router } = require("express");
const { createPreferenceHandlers, feedbackHandlers } = require("../handlers/mpHandlers");

const mpRouters = Router();

mpRouters.post("/create_preference", createPreferenceHandlers)
mpRouters.get("/feedback", feedbackHandlers)

>>>>>>> 872914fd90077808f1615f299c28d07781d1868a
module.exports = mpRouters