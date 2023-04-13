import { Router } from "express";
import {
  countAllUsers,
  createMovie,
  deleteMovie,
  findAllMovie,
  findAllMovieIds,
  findMovieById,
  updateMovie,
} from "../controllers/moviesController";

const movieRouter = Router();

movieRouter.get("/", findAllMovie);
movieRouter.get("/count", countAllUsers);

movieRouter.get("/ids", findAllMovieIds);
movieRouter.get("/:_id", findMovieById);
movieRouter.post("/", createMovie);
movieRouter.delete("/:_id", deleteMovie);
movieRouter.put("/:_id", updateMovie);

export default movieRouter;
