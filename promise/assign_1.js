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

function settime(du,msg){
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