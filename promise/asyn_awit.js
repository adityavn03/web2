//syntatic sugar on top of the promise. behind the seen the it uses the promises.
//it provide a way to write a asynchronous code that look and behave like synchronous code, making it easier to read and maintain.
//it build on top promises and allow you to avoid chaining .then() and .catch() method while still working with asynvhronous operations


function settime(ms){
    return new Promise((resolve)=>{
        
        setTimeout(resolve(),ms)
    })
}


async function solve(){
    await settime(2000);
    console.log("hi");
    await settime(3000);
    console.log("hello");
    await settime(5000);
    console.log("5 second");


}
solve()

console.log("it asyn function")