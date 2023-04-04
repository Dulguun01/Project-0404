import { Router } from "express";
import { createUser, deleteUsers, findAllUsers, findUserById, updateUsers } from "../controllers/usersController";
const userRouter = Router()

userRouter.get("/",findAllUsers)
userRouter.get("/:_id",findUserById)
userRouter.post("/",createUser)
userRouter.delete("/:_id",deleteUsers)
userRouter.put("/:_id",updateUsers)



export default userRouter