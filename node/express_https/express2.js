const express=require("express");
const app=express();
app.use(express.json());  // it must be before the routes

var users=[{
    name:"john",
    kidney:[{
        healthy: false
    }]
}]
//------------get--------
app.get("/",(req,res)=>{
    const j=users[0].kidney;
    const k=users[0].kidney.length;
    let ki1=0
    let unki1=0
    let id=0
    for(let i=0;i<k;i++){
        id++
        if(j[i].healthy){
            ki1++;
        }
    
    }
    unki1=k -ki1

    
    res.json({
        ki1,
        id,
        unki1 
    })

})

//------------------post--


app.post("/",(req,res)=>{
    const kidney1=req.body.ishealthy;
    const id=req.body.id;
    console.log(id);
    console.log(kidney1)
    users[0].kidney.push({
        healthy:kidney1,
        id:id
    })
    res.json({msg:"done!"})
})

//-------------put--------

app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidney.length;i++){
        users[0].kidney[i].healthy=true;
        res.json({})
    }
})
//------------delete-----------


//check the if any of the kidney is not healthy
function check_even_one_unheathty_kidney(){
    for(let i=0;i<users[0].kidney.length;i++){
        if(!users[0].kidney[i].healthy){
            return true;
        }
    }
    return false;
}

app.delete("/",(req,res)=>{
    if(check_even_one_unheathty_kidney()){
        const newkidney= new Array();
        for(let i=0;i<users[0].kidney.length;i++){
            newkidney.push({
                healthy:true,
                id:i
            })
        }
    users[0].kidney=newkidney;
    res.json({msg:"deletion is done!"})
    }
    else{
        res.status(411).json({msg:"there is no unhealthy kidney are present!"})
    }

})
app.listen(3000)