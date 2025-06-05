import { preProcessFile } from "typescript"
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
    career:string,
    address?:string  //optional if you does not give the value also it is runable 

}
let z:name={name:"ramos",age:32,career:"footballer"}
console.log(z)

//interface example

type user={
    name:string,
    age:number,
    address:{
        position:string,
        team:string
    }
}
const user_detail:user={
    name:"buffon",
    age:35,
    address:{
        position:"goly",
        team:"juvantueos"
    }
}
function veiw_detail(user1:user):string|number{
    return user1.address.team+" "+user1.name;
}
console.log(veiw_detail(user_detail))
//-------------------------------------------------------------------------------
//merging the address
interface address{
    name:string,
    goals:number
}
interface league1{
    age:number
    address:address
}
interface championleague{
    address:address
}

const detail_user:league1={
    age:10,
    address:{
        name:"neymar",
        goals:100
    }
}
console.log(detail_user)

//----------------------------------------------------------------------------------------------------------------------------------------------
// the interface

interface people{
    name:string,
    matches:number,
    goals:number,
    display():string,
}
const people1:people={
    name:"suwarez",
    matches:500,
    goals:400,
    display:()=>{return "very good player"}
}
console.log(people1.display())

//-------------------------------------------------------------------------------------------------------------------------------------
//implemants in class 
interface shape{
    name:string,
    size:number,
    edges:number,
    display():string|number,
}
class b implements shape{
    /*name:string             all three line can be reduce by implementing public,private,protected in the constructor itself
    size:number
    edges:number
    */
    constructor(public name:string,public size:number,public edges:number){
        this.name=name
        this.edges=edges
        this.size=size
    }
    display(): string |number{
        return this.name+" "+this.size+" "+this.edges;

        
    }
}
let c=new b("rec",1,2);
console.log(c);

//abstract class can be used instead of the interface and they are have similar classes . abstract have a default implementation 
//------------------------------------------------------------------------------------------------------------------------------
//arr
function arr(num:number[]){
    let j=0
    for(let i=0;i<num.length;i++){
        j=j+i
    }
    console.log(j)
}
arr([1,2,3,4,5,6,7,8])

//----------------------------------------------------------------------------------------------------------------------------------
interface emp1{
    name:string,
    age:number
}
const add_age=(user1:emp1,user2:emp1)=>{
    return user1.age+user2.age;
}
console.log(add_age({name:"yamal",age:16},{name:"son",age:20}))