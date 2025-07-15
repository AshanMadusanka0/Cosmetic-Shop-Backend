import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/studentsRouter.js";
import productRouter from "./routes/productsRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express()

app.use(express.json())

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

app.listen(6000, 
    ()=>{
        console.log("Server is started")
        console.log("Thank you")
    }
)