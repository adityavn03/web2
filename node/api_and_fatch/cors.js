const express=require("express");
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())
app.post("/sum",(req,res)=>{
    let a=parseInt(req.body.a)
    let b=parseInt(req.body.b)
    let sum=a+b;
    res.json({
        sum
    })
})

app.listen(3000)