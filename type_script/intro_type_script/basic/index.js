"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greed(arg1) {
    return "hello" + arg1;
}
console.log(greed("messi"));
function sum(a, b) {
    console.log(a + b);
}
sum(1, 2);
//--------------------------------------------------------------------
const age_check = (age) => {
    if (age >= 18) {
        return "allow to vote ";
    }
    else {
        return "vote can't be voted ";
    }
};
console.log(age_check(18));
// -----------------------------------------------------------------
const deplay = () => {
    let a = setTimeout(() => { console.log("printed after 1 second "); }, 2000);
    return a;
};
console.log(deplay());
const deplayedcall = (fn) => {
    setTimeout(fn, 1000);
};
function log() {
    console.log("hello there ");
}
deplayedcall(log);
//---------------------------------------------------------------------------
//objects
const obj = (user) => {
    console.log(user.name + "'s" + " age is " + user.age);
};
obj({ name: "messi", age: 25 });
function football(user) {
    console.log(user.name + " scored " + user.goals + " in his " + user.age + " age");
}
let user = {
    name: "messi",
    age: 25,
    goals: 1000
};
football(user);
let a = {
    name: "neymar",
    age: 21,
    department: "IT"
};
console.log(a);
let z = { name: "ramos", age: 32, career: "footballer" };
console.log(z);
