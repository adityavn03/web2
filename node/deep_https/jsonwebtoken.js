const express=require("express");
const jsonwebtoken=require("jsonwebtoken")
const jwt_secret="messi"
const app=express();
app.use(express.json())
const user=[]

app.post("/signup",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let a=user.find((u)=>{return u.username==username})
    if(a){
        res.json("i have an account")
    }
    
    else{
        user.push({
            username,
            password
        })
        console.log(user)
        res.json({
            message:"you have loged in successfully"
        })
    }
        
})

function auth(req,res,next){
    let token=req.headers.token;
    let tokenverify=jsonwebtoken.verify(token,jwt_secret);
    if(tokenverify){
        req.username=tokenverify.username
        next()
    }
    else{
        res.json({
            message:"token does not match"
        })
    }


}

app.post("/signin",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let tokeninsert=user.find((u)=>{
        return u.username==username && u.password==password
    })
    let token=jsonwebtoken.sign({
        username:tokeninsert.username,
        password:tokeninsert.password
    },jwt_secret)
    console.log(token)
    if(tokeninsert){

        res.json({
            message:user,
            token:token,
            password:password
        })

    }
    else{
        res.status(404).json({
            message:"please check the username or password "
        })
    }
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.get("/me",auth,(req,res)=>{

    let newtoken=user.find((u)=>{return req.username==u.username}) //in here the req.user name is come from the auth middleware 
    console.log(newtoken)
    if(newtoken){
        res.json({
            username:newtoken.username,
            password:newtoken.password
        })
    }
    else{
        res.status(200).json({
            message:"token is not matching correctly try an=gain some time"
        })
    }
})
app.listen(3000) 