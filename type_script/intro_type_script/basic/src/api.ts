interface user{
    name:string,
    age:number,
    profession:string,
    foot:string
}
type userpros=Pick<user,'name'|'age'|'foot'>
type userpartial=Partial<userpros>             //partial is used
function pickfunction(user_detail:userpros){
    console.log(user_detail.name)
}
function partial(user_detail:userpartial){
    console.log(user_detail.name+" "+user_detail.age)
}
pickfunction({name:"messi",age:28,foot:"left"})
partial({name:"ronaldo",age:40})
//-------------------------------------------------------------------------------------------
//readonly       internal value can be changed in the array and object if it is assign to the const itself

type emp={
    name:string,
    age:number,
}
const user3:Readonly<emp>={
    name:"neymar",
    age:20,

}
//user3.name="inesta"           it provide a error because of the readonly properties
//----------------------------------------------------------------------------------------------

type student=Record<string,{age:number,name:string}>
const std1:student={"ias1":{age:15,name:"yashiro"}}
console.log(std1)

//map
type user4={
    age:number,
    name:string,
}
const std2=new Map<string,user4>(); //<>()is used to spefies the datatypes inside the maps
std2.set("ias2",{age:20,name:"pepe"})
console.log(std2.get("ias2"))

//-----------------------------------------------------------------------------------------------
//exclude 
type user5="name"|"email"|"password"
type exclude1=Exclude<user5,"password">
function exclude_display(ex:exclude1){
    console.log(ex);
}
exclude_display("email")
//exclude_display("password");        it will be thrown an error 
