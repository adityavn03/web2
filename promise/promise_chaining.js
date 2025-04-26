function settime(mi){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(),mi)
    })
}

//promise chaining 
//callback hell is bad in the js


settime(1000).then(function(){
    console.log("hi")
    return settime(2000)
}).then(function(){
    console.log("hello")
    return settime(2000)
}).then(function(){
    console.log("5 second")
})