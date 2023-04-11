import { Router } from "express";
import {  createMovie, deleteMovie, findAllMovie, findAllMovieIds, findMovieById, updateMovie } from '../controllers/moviesController'

const movieRouter = Router()

movieRouter.get("/",findAllMovie)

movieRouter.get("/ids",findAllMovieIds)
movieRouter.get("/:_id",findMovieById)
movieRouter.post("/",createMovie)
movieRouter.delete("/:_id",deleteMovie)
movieRouter.put("/:_id",updateMovie)



export default movieRouter