import express, {Express,Request,Response} from "express"
import movieRouter from "./routes/moviesRouer";
import userRouter from "./routes/usersRouter";
const app:Express = express();
app.use(express.json());

app.get("/", (req:Request, res:Response) => {
  res.json("Hello world");
});

app.get("/hello",(req,res)=>{
  res.json("HI")
})


app.use("/api/users",userRouter)
app.use("/api/movies",movieRouter)

export default app;