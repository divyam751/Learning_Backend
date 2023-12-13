const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url==="/sugar"){
         res.write("Here is your Sugar")
         res.end("!")
    }
    else if (req.url==="/salt"){
        res.write("This is your salt")
        res.end("..!")
    }
})

server.listen(8000,()=>{
    console.log("Server is running on port 8000");
})