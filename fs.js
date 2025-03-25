const fs = require("fs");
fs.writeFileSync('./log.txt', "writing into file using writeFileSync");
fs.appendFileSync("./log.txt","\nappending into the file");
const result = fs.readFileSync('./log.txt', 'utf-8');
console.log(result);
fs.readFile("./log.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

