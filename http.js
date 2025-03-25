const http = require("http");
const server = http.createServer((req,res)=>{
    switch(req.url) {
        case "/":
            res.end("home page");
        break;
        case "/about":
            res.end("About section");
        break;
        default:
            res.end("404 not found");
    }
}) 
server.listen(8000,()=>{
    console.log ("server started at port 8000");
});
