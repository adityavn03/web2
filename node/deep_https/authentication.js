const express=require("express");

const app=express();
app.use(express.json())
const user=[]
function generatetoken(){
    let option="";
    const tokeng = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
      ];
      for(let i=0;i<tokeng.length;i++){
        option+=tokeng[Math.floor(Math.random()*tokeng.length)];
        

      }
      return option;
}
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

app.post("/signin",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let tokeninsert=user.find((u)=>{
        return u.username==username && u.password==password
    })
    let token=generatetoken()
    if(tokeninsert){
        tokeninsert["token"]=token    //it will change the original array 
        console.log(user)
        res.json({
            message:user
        })

    }
    else{
        res.status(404).json({
            message:"please check the username or password "
        })
    }
})

app.get("/me",(req,res)=>{
    let token=req.headers.token;
    console.log(token)
    let newtoken=user.find((u)=>{return token==u.token})
    console.log(newtoken)
    if(newtoken){
        res.json({
            newtoken
        })
    }
    else{
        res.json({
            message:"token is not matching correctly try an=gain some time"
        })
    }
})
app.listen(3000) 