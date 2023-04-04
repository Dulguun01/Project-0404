import { Request, Response } from "express"
import mongoose from "mongoose"
import MovieModel, { IMovie } from "../models/movieModel"
export const countAllUsers = async(req:Request,res:Response)=>{
    res.json( await MovieModel.count({}))
  
}

export const findAllMovie =async(req:Request,res:Response) =>{
    const {limit ="10",skip ="0"} =req.query
    const result :IMovie[]=await MovieModel.find({}).limit(Number(limit)).skip(Number(skip))
   res.json(result)
}

export const findMovieById = async(req:Request,res:Response)=>{
    const {_id} =req.params

    const result: IMovie | null=await MovieModel.findById(_id)
    res.json(result)
}

export const createMovie = async(req:Request,res:Response)=>{
    // const body = req.body;
    
    const newUser  =await MovieModel.create(req.body)
    res.json(newUser)
}
export const updateMovie = async(req:Request,res:Response)=>{
    const {_id} =req.params
    console.log(_id);

    
    const body =req.body;
    console.log(body)
    const result=await MovieModel.findByIdAndUpdate(_id,body ,{new:true})
    res.json(result)
}

export const deleteMovie =async(req:Request,res:Response)=>{
    const {_id} =req.params
    const result:IMovie | null =await MovieModel.findByIdAndDelete(_id)
    res.json(result)
}

