const http= require('http');

const server= http.createServer(function(req,res){
   
    if(req.url == "/"){
        res.end("Home Page");
    }

    if(req.url == "/profile"){
        res.end("Profile Page");
    }
    if(req.url == "/login"){
        res.end("Login Page");
    }
    if(req.url == "/registration"){
        res.end("Registration Page");
    }


});

server.listen(6500,function(){

    console.log("server create successful");

});
