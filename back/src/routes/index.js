const express = require("express");
const router = express.Router();
const moviesRoutes = require("./moviesRoutes");

//const createMovieRouter = require("./createMovieRouter.js")

// Ruta principal
router.get("/", (req, res) => {
    res.status(200).send({
        message: "Todo ok en ruta /",
    });
});

// Ruta /moviescreate
//router.use('/moviesCreate', createMovieRouter);

// Rutas relacionadas con películas
router.use('/movies', moviesRoutes);

module.exports = router;
