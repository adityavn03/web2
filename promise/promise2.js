const js=require("fs")
console.log("--------start of the line--------")
function secondreadfile(lastvalue){
    js.readFile("a.txt","utf-8",function(err,data){
        console.log(data)
    } )
    setTimeout(function(){
        console.log("set timout function")
    },3000)
}
function setTimeoutPromisified(){
    console.log("before promise ")
    return new Promise(secondreadfile);
}
setTimeoutPromisified().then(callback)

function callback(){
    console.log()
    console.log("promises called value")
}
console.log("------end of the line-----------")