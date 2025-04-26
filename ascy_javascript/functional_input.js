function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;

}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
// Higher-order function that takes another function as an argument

function op(a,b,operator){
    return operator(a,b);
}


console.log(op(15,3,add));
console.log(op(15,3,div));
console.log(op(15,3,sub))
console.log(op(15,3,mul))
