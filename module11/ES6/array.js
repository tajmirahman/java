// multi dimentional array

/*
var bangladesh= ['Dhaka','Rangpur','Dinajpur']
var india= ['Mumbai','Channai','Kalkata'];
var china= ['Uhan','Shanghai','Hongkong'];

var asia=[bangladesh,india,china];

console.log(asia[2][2]);

*/

// Array De-structuring

/*
var country= ['Ban','Ind','Nep','Pak'];

var [a,,,b]=country;

console.log(a);

*/

// ES6 Map

var myMap = new Map();

myMap.set("key1", "Bangaldesh");
myMap.set("key2", "India");
myMap.set("key3", "Nepal");


// console.log(myMap.keys());

// myMap.delete("key1");
// myMap.clear();
// console.log(myMap.get("key1"));



// for(let myValue of myMap.values()){
//     console.log(myValue);
//     // console.log(myMap.keys());
// }


// has() Methods
if (myMap.has("key10")) {
    console.log("Yes");
} else {
    console.log("No");
}
