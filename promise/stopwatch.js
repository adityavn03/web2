function setTimeoutpromisified(time){
    return new Promise((resolve)=>{
        setTimeout(resolve,time);
    })
}
var i=0;
function callback(){
    i+=1
    
    console.log(i);
    setTimeoutpromisified(500).then(callback)
}
setTimeoutpromisified(1000).then(callback)