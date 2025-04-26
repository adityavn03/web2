import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/itfor', (req,res)=>{
    res.send("it is from res and second ")
})
app.get('/pas',(req,res)=>{
    res.send("<b>it is from the post operation</b>")
})

app.listen(3000)