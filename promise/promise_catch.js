const fs=require("fs")
const s=(resolve,reject)=>{
        console.log("2")
        fs.readFile("a.txt","utf-8",function(err,data){
            if(err) {setTimeout(()=>{reject(err)},1000) 
                
            }
            else{ setTimeout(()=>{resolve(data)},2000)
            console.log(data)
        }
        })
    }
function settime(){
    console.log("5")
    return new Promise(s)
}
console.log("1")
settime().then(function(data){
    console.log("3")
    console.log(data)
}).catch(function(err){
    console.log(err)
})