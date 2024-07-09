
// console.log('hello world');
/*

"use strict";
myName();
function myName(){
   let name= "utsob";
   console.log(name)
}



// Spread Opeator

let poorCountry= ['Bangladesh','Nepal','Srilanka'];
// let richCounty= [...poorCountry,'Usa','London','Uk'];
let richCounty= ['Usa','London','Uk']

    richCounty.push(poorCountry);

console.log(richCounty);




// Rest Parameters

function calculation(a,b,...number){

    let sum =a*b;
    for(let i of number){
        sum= sum + i;
    }
    console.log(sum);

}

calculation(10,20,3,4,5,6);



// Dynamic function

var name=function(nameValue){
    return nameValue;
}
 
 name= "Tajmilur Rahman Utsob";
console.log(name);


// Es6 Variable Declear

// var variable

var name= "Utsob";
//    name= "Tajmilur";// Re-assaign
 var  name= "Tajmilur";// Re-decelear

    console.log(name);


// let variable
    let name= "Utsob";
       name= "Tajmilur";// Re-assign
    //  let  name= "Tajmilur";// Re-declear
   
       console.log(name);

// const variable-> These two step are not allowed.



// Variable Scope

// Local Scope Variable

function name(){
    let country= "Bangladesh";
    console.log(country);
}

name();




// Global Scope Variable

let country= "Bangladesh";

function name(){
}

console.log(country);
name();


// Using Simple For Loop

var i;

for(i=0; i<=100; i=i+50){
    console.log('Allah');
}



var myName= ['Jamal','Kamal','Tomal','Malamal'];

for(let nameOne of myName){
    console.log(nameOne);
}




// Use for in Loop



for(let prop in utsob){
    console.log(prop+ "=" + utsob[prop] );
}


/// For In Loop

utsob={color: 'Black',height: 5.8,Age: 31,}

if(utsob['color']== 'Black'){
    console.log('This is Black')
}
else if(utsob['color']== 'Blue'){
    console.log('Blue')
}
else{
    console.log("Color Not Match");
}


// Function Return 

function funOne(){
    return 20;
}

function funTwo(){
    return funOne();
}

console.log(funOne()+funTwo());



// Annonymous Function

 var name= function(...x){
    return x;
}

console.log(name(1,2,3,4,5));





  */

var http=require('http');

var server= http.createServer(function(req,res){
   res.end('Hello World');
});

server.listen(5500);

console.log("server create successful");
