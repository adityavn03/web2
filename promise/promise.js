function random(resolve){
    resolve();

}
let p=new Promise(random);//suppose to return u someything eventually


//using the eventual value returned by the promise
function callback(){
    console.log("promise")
}
p.then(callback)

 