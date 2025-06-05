import {z} from "zod"
import express, { json } from "express";

const app=express();
app.use(express.json())

const zodoperation=z.object({
    name:z.string().min(1,{message:"it require at least 1 charater "}),
    age:z.number().min(1,{message:"it require the minimum of 3 charater "})
})
type zodtype=z.infer<typeof zodoperation>

app.post("/user",(req,res)=>{
    const {success}=zodoperation.safeParse(req.body);
    const user1:zodtype=req.body
    console.log(user1)
    if(success){
        res.json({
            message:"the given input have a satisfies the require input condition"
        })

    }
    else{
        res.json({message:"provide the correct input"})
    }

})
app.listen(3000);