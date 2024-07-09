
// 1- Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum(a, b) {
    return a + b;
}

let result = calculateSum(8, 4)
console.log(result);


// 2- Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.


function isEven(number) {
    if (number % 2 == 0) {
        console.log('true');
    } else {
        console.log('false')
    }
}

isEven(51);



// 3- Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.


function findMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return undefined;
    }

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

// let numbers = [2, 8, 5, 13, 50];
let numbers = [2, 30, 5, 13, 20];

let result = findMax(numbers);

console.log(result);


// 4- Write a function named ‘reverseString’ that takes a string and returns the string reversed.



function reverseString(str) {

    return str.split('').reverse().join('');
}


let originalString = "Tajmilur";
let reversedString = reverseString(originalString);
console.log(reversedString);



// 5- Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.



function filterOddNumbers(numbers) {

    return numbers.filter(numbers => numbers % 2 !== 0);
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = filterOddNumbers(array);
console.log(oddNumbers);


// 6- Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.



function sumArray(numbers) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

let array = [1, 2, 3, 4, 5];
let totalSum = sumArray(array);
console.log(totalSum);



// 7- Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.


function sortArray(numbers) {

    let sortedArray = numbers.slice().sort((a, b) => a - b);

    return sortedArray;
}


let array = [5, 2, 9, 1, 5, 6];
let sortedArray = sortArray(array);
console.log(sortedArray);


// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"

function capitalizeFirstLetter(str) {

    if (str === '') {
        return '';
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}


// console.log(capitalizeFirstLetter("hello")); 
console.log(capitalizeFirstLetter("tajmilur")); 
