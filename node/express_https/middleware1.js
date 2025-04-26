const express= require("express")
const app=new express();
let count_reload=0;

//app.use(check_age_throught_middleware) it inizilase to all above routes

function check_age_through_middleware(req,res,next){
    count_reload=count_reload+1;
    const n=req.query.age;
    console.log("it is method "+ req.method)
    console.log(req.url)
    console.log(new Date())
    if(n>=14){
        next()
    }
    else{
        res.status(411).json({
            msg:"you not eligible to riden the ride 1"
        })
    }

}

app.get("/ride2",check_age_through_middleware,(req,res)=>{

            res.json({
                msg:"you have successfully riden the ride 1"
            })
     

})


app.get("/ride1",check_age_through_middleware,(req,res)=>{
            res.json({
                msg:"you have successfully riden the ride 1"
            })
       
})


app.get("/count",check_age_through_middleware,(req,res)=>{
    res.send(count_reload)

})

app.listen(3000)