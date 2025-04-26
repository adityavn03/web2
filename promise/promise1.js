const js=require("fs")
function secondreadfile(lastvalue){
    js.readFile("a.txt","utf-8",function(err,data){
        lastvalue(data);
    } )
}
function readfile(){
    return new Promise(secondreadfile);
}
let p=readfile()
function callback(c){
    console.log(c)
}
function callback1(c){
    console.log(c)
}
p.then(callback)
p.then(callback1)//here we can multiple then block