const fs=require("fs")
function print(err,data){
    console.log(data)
}
fs.readFile("a.txt","utf-8",print)
fs.readFile("b.txt","utf-8",print)
console.log("hello")

//why does the print not print() because the print function is called before the file is read
//it because op in the functional call back
