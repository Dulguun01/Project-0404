import { Request, Response } from "express"
import mongoose from "mongoose"
import UserModel, { IUsers } from "../models/userModel"
export const countAllUsers = async(req:Request,res:Response)=>{
    res.json( await UserModel.count({}))
  
}

export const findAllUsers =async(req:Request,res:Response) =>{
    const {limit ="10",skip ="0"} =req.query
    const result :IUsers[]=await UserModel.find({}).limit(Number(limit)).skip(Number(skip))
   res.json(result)
}

export const findUserById = async(req:Request,res:Response)=>{
    const {_id} =req.params

    const result: IUsers | null=await UserModel.findById(_id)
    res.json(result)
}

export const createUser = async(req:Request,res:Response)=>{
    // const body = req.body;
    
    const newUser  =await UserModel.create(req.body)
    res.json(newUser)
}
export const updateUsers = async(req:Request,res:Response)=>{
    const {_id} =req.params
    console.log(_id);

    
    const body =req.body;
    console.log(body)
    const result=await UserModel.findByIdAndUpdate(_id,body ,{new:true})
    res.json(result)
}

export const deleteUsers =async(req:Request,res:Response)=>{
    const {_id} =req.params
    const result:IUsers | null =await UserModel.findByIdAndDelete(_id)
    res.json(result)
}

