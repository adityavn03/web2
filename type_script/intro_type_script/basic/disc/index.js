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
const user_detail = {
    name: "buffon",
    age: 35,
    address: {
        position: "goly",
        team: "juvantueos"
    }
};
function veiw_detail(user1) {
    return user1.address.team + " " + user1.name;
}
console.log(veiw_detail(user_detail));
const detail_user = {
    age: 10,
    address: {
        name: "neymar",
        goals: 100
    }
};
console.log(detail_user);
const people1 = {
    name: "suwarez",
    matches: 500,
    goals: 400,
    display: () => { return "very good player"; }
};
console.log(people1.display());
class b {
    /*name:string             all three line can be reduce by implementing public,private,protected in the constructor itself
    size:number
    edges:number
    */
    constructor(name, size, edges) {
        this.name = name;
        this.size = size;
        this.edges = edges;
        this.name = name;
        this.edges = edges;
        this.size = size;
    }
    display() {
        return this.name + " " + this.size + " " + this.edges;
    }
}
let c = new b("rec", 1, 2);
console.log(c);
//abstract class can be used instead of the interface and they are have similar classes . abstract have a default implementation 
//------------------------------------------------------------------------------------------------------------------------------
//arr
function arr(num) {
    let j = 0;
    for (let i = 0; i < num.length; i++) {
        j = j + i;
    }
    console.log(j);
}
arr([1, 2, 3, 4, 5, 6, 7, 8]);
const add_age = (user1, user2) => {
    return user1.age + user2.age;
};
console.log(add_age({ name: "yamal", age: 16 }, { name: "son", age: 20 }));
