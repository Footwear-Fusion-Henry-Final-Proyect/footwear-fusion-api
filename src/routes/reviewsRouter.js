const { Router } = require("express");
const { createReviewsHandler } = require("../handlers/reviewsHandler");

const reviewsRouter = Router();

reviewsRouter.post("/:productId", createReviewsHandler)

module.exports = reviewsRouter;