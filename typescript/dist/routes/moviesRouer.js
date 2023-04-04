"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesController_1 = require("../controllers/moviesController");
const movieRouter = (0, express_1.Router)();
movieRouter.get("/", moviesController_1.findAllMovie);
movieRouter.get("/:_id", moviesController_1.findMovieById);
movieRouter.post("/", moviesController_1.createMovie);
movieRouter.delete("/:_id", moviesController_1.deleteMovie);
movieRouter.put("/:_id", moviesController_1.updateMovie);
exports.default = movieRouter;
