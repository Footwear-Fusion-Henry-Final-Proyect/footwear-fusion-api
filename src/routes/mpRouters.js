const { Router } = require("express");
const { createPreferenceHandlers, feedbackHandlers } = require("../handlers/mpHandlers");

const mpRouters = Router();

mpRouters.post("/create_preference", createPreferenceHandlers)
mpRouters.get("/feedback", feedbackHandlers)

module.exports = mpRouters