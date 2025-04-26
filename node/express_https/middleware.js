const express= require("express")
const app=new express();


// function willl return a booolean which return true if age is above a 14

//given below code is not a middleware implementation of the original middleware will present in the middleware1.js

function check_age(n){
    if(n>=14){
        return true;
    }
        return false;

}

app.get("/ride2",(req,res)=>{
    if(check_age(req.query.age)){
            res.json({
                msg:"you have successfully riden the ride 1"
            })
        }
    else{
        res.status(411).json({
            msg:"you are not eligible to ride the ride 1"
        })
    }

})


app.get("/ride1",(req,res)=>{
    if(check_age(req.query.age)){
            res.json({
                msg:"you have successfully riden the ride 1"
            })
        }
    else{
        res.status(411).json({
            msg:"you are not eligible to ride the ride 1"
        })
    }

})

app.listen(3000)