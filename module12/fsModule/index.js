/*
//  1. Fs Read methods Using Synchronous and Asynchronous

const fs= require("fs");
const http= require("http");

const server=http.createServer(function(req,res){

    //use Asynchronous role
    if(req.url == "/"){

        // fs.readFile('home.html',function(error,data){
        //     res.writeHead(200,{'content-type':'text/html'});
        //     res.write(data);
        //     res.end();
        // });

            //use Synchronous role
            let myData=fs.readFileSync('home.html')
            res.writeHead(200,{'content-type':'text/html'});
            res.write(myData);
            res.end();


    }


});

server.listen(4040,function(){
    console.log("server is running");
});






// 2. Fs  Write Methods using Asynchronous


const fs= require("fs");
const http= require("http");

const server= http.createServer(function(req,res){


    // Using Asynchronous Methods

    if(req.url=="/"){

        fs.writeFile('demo.html','Welcome to Node Js Demo Page',function(error){
            if(error){
                res.writeHead(200,{'content-type':'text/html'});
                res.write("File Write Fail");
                res.end();
            }else{
                res.writeHead(200,{'content-type':'text/html'});
                res.write("File Write Success");
                res.end();

            }
        });


    }


});

server.listen(4040,function(){
    console.log("Surver Is Running");
});



// 3. Fs  Write Methods using Synchronous


const fs = require("fs");
const http = require("http");

const server = http.createServer(function (req, res) {


    // Using Synchronous Methods

    if (req.url == "/") {

        let error = fs.writeFileSync('demoSync.html', 'Welcome to Node Js DemoSync Page');

        if (error) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write("File Write Fail");
            res.end();
        } else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write("File Write Success");
            res.end();

        }


    }


});

server.listen(4040, function () {
    console.log("Surver Is Running");
});


*/

// 4. Fs  Rename Methods using  Asynchronous

const fs= require("fs");
const http= require("http");

const server= http.createServer(function(req,res){


    // Using Asynchronous Methods

    if(req.url=="/"){

        fs.rename('demo.html','demoNew.txt',function(error){
            if(error){
                res.writeHead(200,{'content-type':'text/html'});
                res.write("File Rename Fail");
                res.end();
            }else{
                res.writeHead(200,{'content-type':'text/html'});
                res.write("File Rename Success");
                res.end();

            }
        });


    }


});

server.listen(4040,function(){
    console.log("Surver Is Running");
});