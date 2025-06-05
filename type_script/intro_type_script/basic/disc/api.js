"use strict";
function pickfunction(user_detail) {
    console.log(user_detail.name);
}
function partial(user_detail) {
    console.log(user_detail.name + " " + user_detail.age);
}
pickfunction({ name: "messi", age: 28, foot: "left" });
partial({ name: "ronaldo", age: 40 });
const user3 = {
    name: "neymar",
    age: 20,
};
const std1 = { "ias1": { age: 15, name: "yashiro" } };
console.log(std1);
const std2 = new Map(); //<>()is used to spefies the datatypes inside the maps
std2.set("ias2", { age: 20, name: "pepe" });
console.log(std2.get("ias2"));
function exclude_display(ex) {
    console.log(ex);
}
exclude_display("email");
//exclude_display("password");        it will be thrown an error 
