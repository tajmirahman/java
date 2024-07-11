const fs= require("fs");
const http= require("http");

const server= http.createServer(function(req,res){

    if(req.url=='/'){
        let data= fs.readFileSync('home.html','utf-8');
        res.end(data);
    }
    else if(req.url=='/About'){
        let data= fs.readFileSync('about.html','utf-8');
        res.end(data);
    }
    else if(req.url=='/Contact'){
        let data= fs.readFileSync('contact.html','utf-8');
        res.end(data);
    }
    else if(req.url=='/Terms'){
        let data= fs.readFileSync('terms.html','utf-8');
        res.end(data);
    }
    
});

server.listen(6060);
console.log("server is running");