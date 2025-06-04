import { number, string } from "zod"

function greed(arg1:any){
    return "hello"+arg1
}

console.log(greed("messi"))

function sum(a:number,b:number){
    console.log(a+b)
}
sum(1,2)

//--------------------------------------------------------------------
const age_check=(age:number)=>{
    if(age>=18){
        return "allow to vote "
    }
    else{
        return "vote can't be voted "
    }
}
console.log(age_check(18))

// -----------------------------------------------------------------
const deplay=()=>{
   let a=setTimeout(()=>{console.log("printed after 1 second ")},2000)
   return a
}
console.log(deplay())

const deplayedcall=(fn:()=>void)=>{
     setTimeout(fn,1000)
}
function  log(){
    console.log("hello there ")
}
deplayedcall(log)

//---------------------------------------------------------------------------
//objects

const obj=(user:{name:string,age:number})=>{
    console.log(user.name+"'s"+ " age is "+user.age)
}
obj({name:"messi",age:25})


//--------------------------------------------------------------------------
//custom interface

interface usertype{
    name:string,
    age:number,
    goals:number
}
function football(user:usertype){
    console.log(user.name+" scored "+user.goals+" in his "+user.age+" age")
}
let user:usertype={
    name:"messi",
    age:25,
    goals:1000

}
football(user)

//----------------------------------------------------------------------------------
//join two interface throught the joins

interface manager{
    name:string,
    age:number
}
interface emp{
    name:string,
    department:string
}

type join=manager&emp;
let a:join={
    name:"neymar",
    age:21,
    department:"IT"
}
console.log(a)

//---------------------------------------------------------------------------------------------------
//sample

interface name{
    name:string,
    age:number,
    career:string
}
let z:name={name:"ramos",age:32,career:"footballer"}
console.log(z)