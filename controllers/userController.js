import User from "../models/user.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";       //import jwt data validation library on contraller file
import dotenv from "dotenv";       //connect the mongo db url from env file
dotenv.config()                    //connected db config from db 


export function createUser(req, res){

  //passwowrd hashing code
  const newUserData= req.body
  newUserData.password = bycrypt.hashSync(newUserData.password,10)  //password hashing  //10 is the solting value,

    const user =new User(newUserData) //passwowrd hashing code 

    user.save().then(()=>{
      res.json({
        
        message: "User created"
      })

    }).catch(()=>{
        res.json({
            message :"User not created"
        })
    })
}

//email and password confirmation

export function loginUser(req,res){
   User.find({email: req.body.email}).then(
    (users)=>{
    
    if(users.length == 0){
      res.json({
        message: "User not Found"
      })
    }else{
     const user= users[0]

     const isPasswordCorrect= bycrypt.compareSync(req.body.password,user.password)

     if(isPasswordCorrect){

      //add the code for validation(create by the token)
       
      const token= jwt.sign({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isBlocked : user.isBlocked,
        type: user.type,
        profilePicture: user.profilePicture
      }, process.env.SECRET) 
      
      res.json({
        message: "user loged In",
        token:token
      })
   
      //add the code for validation(create by the token)

      
      
     }else{
      res.json({
        message: "User not logged in(wrong password)"
      })
     }
    }
   }
  )
}
//email and password confirmation