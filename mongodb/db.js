const mongoose=require("mongoose");
const sechema=mongoose.Schema;
const objectId=mongoose.ObjectId;
const user=new sechema({
    email:String,
    password:String,
    username:String
})
const todo=new sechema({
    description:String,
    userid:objectId
})

const usermodel=mongoose.model("user",user)
const todomodel=mongoose.model("todo",todo)

module.exports={
    usermodel,
    todomodel
}
