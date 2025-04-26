const fs=require("fs")

function readfile(ms){
    const data=fs.readFileSync("a.txt","utf-8");
    return new Promise((resolve)=>{
    setTimeout(()=>resolve(data),ms)
    })


}

async function solve(){
    const m=await readfile(1000);  //it mean the argument will be store in the m variable
    console.log(m)
}
solve()

// use the destrutureing for multiple arguments
// const [a,b,c]=readfile(1000);  //it mean the argument will