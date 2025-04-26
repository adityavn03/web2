const express=require("express")
const app=express()

app.get("/add",(req,res)=>{
    let a =req.query.a
    let b =req.query.b
    let sum =Number(a)+Number(b)
    res.send(sum)
})
app.get("/sub",(req,res)=>{
    let a =req.query.a
    let b =req.query.b
    res.send(a-b)
})
app.listen(3000)