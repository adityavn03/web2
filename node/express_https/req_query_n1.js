const express=require('express')
const app=express()
 function sum(n){
    let s=0;
    for(let i=0;i<n;i++){
        s=s+i;
    }
    return s;

 }

app.get('/',(req,res)=>{
    const n=req.query.n;
    const l=sum(n);
    res.send(`<h1>hello world</h1> ${l}`)
})

app.listen(3000);