class promise2{
    constructor(fn){
        this.fn=fn
        this.fn(()=>{
            this.resolve()
        })
    }
    then(callback){
        this.callback=callback
    }
}

function secondreadfile(lastvalue){
    js.readFile("a.txt","utf-8",function(err,data){
        console.log(data)
    } )
    setTimeout(function(){
        console.log("set timout function")
        lastvalue()
    },3000)
}

function setTimeoutPromisified(){
    return new Promise(secondreadfile);
}

let p=setTimeoutPromisified()

function callback(){
    console.log("promises called value")
}
p.then(callback)