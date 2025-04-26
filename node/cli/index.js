const fs=require("fs")

function counter_words(){
    console.log(process.argv);
    fs.readFile(process.argv[2],"utf-8",function(err,data){
        let count=1;
        for(let i=0;i<data.length;i++){
            if(data[i]==" "){
                count++;
            }
            

        }
        console.log(count)
    })
}
counter_words()