import { Request, Response } from "express";
import mongoose from "mongoose";
import MovieModel, { IMovie } from "../models/movieModel";
export const countAllUsers = async (req: Request, res: Response) => {
  res.json(await MovieModel.count({}));
};

export const findAllMovieIds = async (req: Request, res: Response) => {
  const result = await MovieModel.find().select({ id: 1 });
  res.json(result.map((movieId) => movieId._id));
};
export const findAllMovie = async (req: Request, res: Response) => {
  const {
    limit = "10",
    skip = "0",
    ordering = "releasedAsc",
    filter = "",
    search = "",
  } = req.query;
  console.log("ordering", ordering);
  let sort = "";
  switch (ordering) {
    case "releasedAsc":
      sort = "released";
      break;
    case "releasedDesc":
      sort = "-released";
      break;
    case "imdbRatingDesc":
      sort = "-awards.wins";
      break;
    case "TitleDesc":
      sort = "-title";
      break;
    case "TitleAsc":
      sort = "title";
      break;
    default:
      sort = "released";
      break;
  }
  console.log("search", search);
  const condition: any = {};
  if (filter) {
    condition.genres = { $regex: new RegExp(`${filter}`, "i") };
  }
  console.log(filter);

  if (search) {
    condition.title = { $regex: new RegExp(`${search}`, "i") };
  }

  const result: IMovie[] = await MovieModel.find(condition)
    .sort(sort)
    .limit(Number(limit))
    .skip(Number(skip));
  res.json(result);
};

export const findMovieById = async (req: Request, res: Response) => {
  const { _id } = req.params;

  const result: IMovie | null = await MovieModel.findById(_id);
  try {
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const createMovie = async (req: Request, res: Response) => {
  // const body = req.body;

  const newUser = await MovieModel.create(req.body);
  try {
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};
export const updateMovie = async (req: Request, res: Response) => {
  const { _id } = req.params;
  console.log(_id);

  const body = req.body;
  console.log(body);
  const result = await MovieModel.findByIdAndUpdate(_id, body, { new: true });
  try {
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const { _id } = req.params;
  const result: IMovie | null = await MovieModel.findByIdAndDelete(_id);
  try {
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
