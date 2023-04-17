"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.createMovie = exports.findMovieById = exports.findAllMovie = exports.findAllMovieIds = exports.countAllUsers = void 0;
const movieModel_1 = __importDefault(require("../models/movieModel"));
const countAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield movieModel_1.default.count({}));
});
exports.countAllUsers = countAllUsers;
const findAllMovieIds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movieModel_1.default.find().select({ id: 1 });
    res.json(result.map((movieId) => movieId._id));
});
exports.findAllMovieIds = findAllMovieIds;
const findAllMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 0, page = 0, ordering = "releasedAsc", filter = "", search = "", } = req.query;
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
    const condition = {};
    if (filter) {
        condition.genres = { $regex: new RegExp(`${filter}`, "i") };
    }
    console.log("page", page);
    const skip = Number(limit * page);
    if (search) {
        condition.title = { $regex: new RegExp(`${search}`, "i") };
    }
    const result = yield movieModel_1.default.find(condition)
        .sort(sort)
        .limit(Number(limit))
        .skip(Number(skip));
    res.json(result);
});
exports.findAllMovie = findAllMovie;
const findMovieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const result = yield movieModel_1.default.findById(_id);
    try {
        res.json(result);
    }
    catch (error) {
        console.log(error);
    }
});
exports.findMovieById = findMovieById;
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const body = req.body;
    const newUser = yield movieModel_1.default.create(req.body);
    try {
        res.json(newUser);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createMovie = createMovie;
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    console.log(_id);
    const body = req.body;
    console.log(body);
    const result = yield movieModel_1.default.findByIdAndUpdate(_id, body, { new: true });
    try {
        res.json(result);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateMovie = updateMovie;
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const result = yield movieModel_1.default.findByIdAndDelete(_id);
    try {
        res.json(result);
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteMovie = deleteMovie;
