import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/studentsRouter.js";
import productRouter from "./routes/productsRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken"; 
import cors from "cors";
import dotenv from "dotenv";       //connect the mongo db url from env file
dotenv.config()      //connect the mongo db url from env file



const app = express()

app.use(express.json())

app.use(cors())

//
app.use(
    (req,res,next)=>{
    let token = req.header("Authorization")
       if(token != null){
          token = token.replace("Bearer ","") 
         // [console.log(token)]
          //decript the code
          jwt.verify(token, process.env.SECRET,
            (err, decoded)=>{
             //console.log(decoded)

             if(decoded == null){
                res.json({
                    message : "Invalid Token"
                })
                return
             }else{
                
                req.user = decoded
             }
          })         
       }
       next()     //pass to the requset next state with this details

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






//render.com link //https://cosmetic-shop-backend.onrender.com
