const { Router } = require("express");
const moviesRouter = Router();
const { moviesController } = require("../controllers/moviesController");

moviesRouter.get("/", moviesController);


module.exports = moviesRouter;
