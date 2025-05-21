//zod validation check hashing throught the bycrypt and backend and the mongodb are use in this folder 

const express=require("express");
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt");
const {usermodel,todomodel}=require("./db");
const jwt_secret="messi"
const app=express();
const {z} =require("zod");
app.use(express.json());
mongoose.connect("mongodb+srv://adityavn03:adityavn@cluster0.6sdfg.mongodb.net/todo-app")


app.post("/signup",async (req,res)=>{
    const email=req.body.email
    const password=req.body.password
    const username=req.body.username
    const requiredcondition=z.object({
        email:z.string().min(3).max(100).email(),
        password:z.string().min(2).max(23),
        username:z.string().min(2).max(23)
    })
    const {success,error}=requiredcondition.safeParse({email,password,username});
    if(!success){
        res.json({
            message:"the above three condition is not satisfy",
            error
        })
        return

    }
    
    const hashedpassword=await bcrypt.hash(password,5)
    console.log(hashedpassword)
    const a=await usermodel.create({
        email:email,
        password:hashedpassword,
        username:username
    })
    console.log(a);

    res.json({
        message:"user data are inserted properly  "
    })


})

app.post("/signin",async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const a=await usermodel.findOne({
        email:email,

    })
    const verifysalt=bcrypt.compare(password,a.password)
    if(verifysalt){
        const token=jwt.sign({id: a._id.toString()},jwt_secret)

        res.json({
            token,
            message:"sign in completed"
        })
    }
    
})

function auth(req,res,next){
    const token=req.headers.token;
    const verifytoken=jwt.verify(token,jwt_secret);
    if(verifytoken){
        req.userid=verifytoken.iat;
        console.log(verifytoken)
        console.log(verifytoken.iat)
        next()
    }
    else{
        res.json({
            message:"token miss match"
    })
    }

}

app.get("/todoc",auth,async (req,res)=>{
    console.log(req.userid)
    res.json({
        userid:req.userid
    })

    
})

app.post("/todog",auth,async (req,res)=>{
    
})

app.listen(3001);

