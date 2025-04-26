
//important note

/*const fs=require("fs")
function promise12(){
    return new Promise((resolve)=>{
        fs.readFile("a.txt",'utf-8')//it will error because the give i/o bound will complte before the promise is resolved
        resolve()
    })

}
function callback(){
    console.log("a")
}

promise12().then(callback)
*/

//corrected code

const fs=require("fs")
function promise12(){
    return new Promise((resolve)=>{
        fs.readFile("a.txt","utf-8",function (e,d){
            if(e)console.log(e);
            resolve(d)
        })
        
    })

}
function callback(d){
    console.log(d)
}

promise12().then(callback)
