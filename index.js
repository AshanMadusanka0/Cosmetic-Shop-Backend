import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/studentsRouter.js";
import productRouter from "./routes/productsRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken"; 
import dotenv from "dotenv";       //connect the mongo db url from env file
dotenv.config()      //connect the mongo db url from env file

const app = express()

app.use(express.json())

//
app.use(
    (req,res,next)=>{  //function assign to next not a value

      const token = req.header("Authorization")?.replace("Bearer","") //read the token gettiong on header
      console.log(token)

      if(token != null){
        jwt.verify(token,process.env.SECRET ,(error,
         decoded)=>{
           if(!error){
            //console.log(decoded)
            req.user = decoded
           }
         })  
       
      }

      next()
    }
)



//


const connectionString = process.env.MONGO_DB_URI   //connect the mongo db url from env file


mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database connected")
    }
).catch(()=>{
    console.log("Data base not connected")
})


app.use("/students",studentRouter)
app.use("/products",productRouter)
app.use("/users",userRouter)

app.listen(5500, 
    ()=>{
        console.log("Server is started")
        console.log("Thank you")
    }
)