const fs=require("fs")
function settime(){
    return new Promise((resolve,reject)=>{
        fs.readFile("a.txt","utf-8",function(err,data){
            if(err) setTimeout(()=>{reject(err)},1000)
            else setTimeout(()=>{resolve(data)},2000)
        })
    })
}

settime().then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
})