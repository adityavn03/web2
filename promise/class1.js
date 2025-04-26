class calsum{
    constructor(a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;
    }
    sum(){
        return this.a+this.b+this.c;
    }
    display(q){
        console.log(q);
    }

}
const obj1=new calsum(1,2,3);
const obj2=new calsum(4,5,6);
console.log(obj1.sum())
console.log(obj2.sum(2))
obj1.display(8);
