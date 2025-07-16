import express from "express";
import mongoose, { Error } from "mongoose";
import studentRouter from "./routes/studentsRouter.js";
import productRouter from "./routes/productsRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt, { decode } from "jsonwebtoken"; 

const app = express()

app.use(express.json())

//
app.use(
    (req,res,next)=>{
    const token= req.header("Authorization")?.replace("Bearer","")
    console.log(token)

    if(token !=null) {
        jwt.verify(token, "cbc-secret-key-7973",(error,
            decoded)=>{
             if(!error)  {
                console.log(decoded)
             } 
            })
    }

        
    }
    
)
//


const connectionString = "mongodb+srv://admin:Ashan73646717@cluster0.szalslh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database connected")
    }
).catch(
    ()=>{
        console.log("Database connection failed")
    }


     
)



app.use("/students",studentRouter)
app.use("/products",productRouter)
app.use("/users",userRouter)

app.listen(5500, 
    ()=>{
        console.log("Server is started")
        console.log("Thank you")
    }
)