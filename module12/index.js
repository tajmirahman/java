var http= require('http');

var server= http.createServer(function(req,res){
      if(req.url == "/"){
         res.writeHead(200,{'content-type':'text/html'});
         res.write('<h1>This is home page</h1>');
         res.end();
      }
      else if(req.url == "/contact"){
         res.writeHead(201,{'content-type':'text/html'});
         res.write('<h1>This is contact page</h1>');
         res.end();
      }
      else if(req.url == "/about"){
         res.writeHead(202,{'content-type':'text/html'});
         res.write('<h1>This is home page</h1>');
         res.end();
      }
});

server.listen(5050,function(){

   console.log("server is running");
});


