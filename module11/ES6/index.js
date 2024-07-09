// arrow function
/*
//  1- Arrow Function

const add = (a,b) => a+b;
let result = add(30,20)
console.log(result);


// 2- Template Literals

let myName= "utsob";
let greeting= `hello, ${myName}! `;
 console.log(greeting);



// 3- Array Destructuring

const array= [1,2,3,4,5];
const [first, second, third, forth, fifth]= array;

console.log(forth);
console.log(second);
console.log(first);



// 4- Object Destructuring

const person= {
    name: 'ustob',
    age: 31,
    location: 'mohamadpur'
};

const { name, age, location }= person;

console.log(name)
console.log(age)
console.log(location)



// 5- Nasted Object Destructuring

const user= {
    name: 'ustob',
    age: 31,
    parent: {
        father: 'fazlim',
        mother: 'tohmina'
    }
};

const {name,age,parent:{father,mother}}= user;

console.log(name);
console.log(age);
console.log(mother);



// 6- Defaut parameters


function greet(name = 'guest') {
    console.log(`hello, ${name}!`);
    return `hello, ${name}!`;
}

greet('utsob');

*/

// 7- Rest Parameters

function sumAll(...numbers) {

    let total = 0;
    for (let number of numbers) {
        total += number;
    }

    return total;

}

console.log(sumAll(1, 2, 3));
console.log(sumAll(1, 2, 30, 40));


