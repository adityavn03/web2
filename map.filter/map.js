const arr=[1,3,6,7,8,9,4,3,4132]

const ans=arr.map((curval,i,a)=>{
    console.log(curval*2);
    console.log(`${i}    ${a}`);
    return curval*3;
})
console.log(ans)

const anf=arr.filter((c,i,ar)=>{
   return c%2==0;
}
)
console.log(anf)

const reduce1=arr.reduce((cum,cur)=>{
    return cum=cur+cum;
},0)

console.log(reduce1)