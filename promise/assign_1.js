const { rejects } = require('assert')
const { resolve } = require('path')

fs=require('fs')
/*function settime(du){
    return new Promise((resolve)=>{
        setTimeout(resolve,du);
    })
}
function callback(){
    console.log('hi');
}
function cal1(){
    console.log("hello")
}
function cal2(){
    console.log("it 5 secomd")
}
settime(1000).then(callback)
settime(3000).then(cal1)
settime(5000).then(cal2)
*/

/*function settime(du,msg){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(msg)},du);
    })
}
function callback(msg){
    console.log(msg);
}

settime(1000,"hi").then(callback)
settime(3000,"hello").then(callback)
settime(5000,"it 5 second").then(callback)
*/
function setprommise(){
    return new Promise((resolve,reject)=>{fs.readFile("a.txt","utf-8",(error,data)=>{
        if(error){
             reject(error)
        }
        else{
            resolve(data) 
        }
    })})

}
setprommise().then((data)=>console.log(data+"it buy the then function")).catch((error)=>console.log(error+"it is printed by the catch function"))