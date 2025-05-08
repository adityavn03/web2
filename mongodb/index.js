const express=require("express");
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")
const {usermodel,todomodel}=require("./db");
const jwt_secret="messi"
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://adityavn03:adityavn@cluster0.6sdfg.mongodb.net/todo-app")


app.post("/signup",async (req,res)=>{
    const email=req.body.email
    const password=req.body.password
    const username=req.body.username
    const a=await usermodel.create({
        email:email,
        password:password,
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
        password:password

    })
    if(a){
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

