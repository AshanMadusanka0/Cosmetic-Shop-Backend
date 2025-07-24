import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
       email :{
        type : String,
        required : true,
        unique : true,
       },
       firstName:{
        type :String,
        required :true,
       },

       lastName: {
         type : String,
         required : true,
       },
       password : {
        type:String,
        required: true,
       },
       isBlock : {
        type : Boolean,
        default : false
        
       },

       role : {
        type : String,
        default : "customer"
       },

       profilePicture : {
        type : String,
        default : "https://cdn-icons-png.flaticon.com/512/9815/9815472.png"
       },
    }
)


const User = mongoose.model("User", userSchema)

export default User;

