class rectangle{
    constructor(h,w,color){
        this.h=h
        this.w=w
        this.color=color

    }
    area(){
        
        console.log(this.color)
        return this.h*this.w;
    }
}
const react=new rectangle(1,2,"red")
const react1=new rectangle(67,2,"red")


console.log(react.area())
console.log(react1.area())
console.log(react1.h)

