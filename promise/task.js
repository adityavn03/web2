const fs = require('fs');

function settime1(){



fs.readFile('a.txt','utf-8',function(err,data){
    if(err) return;
    else{
        const content = data + "Hello Adi";
        fs.writeFile('a.txt',content,function(err){
            if(err) return;
            else{
                console.log(content);
            }
        })
    }
})
}