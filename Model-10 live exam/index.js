// 1) Create a function that takes voltage and current and returns the calculated power.


function calculatePower(current, voltage) {
    return current * voltage;
}

let current = 3;
let voltage = 110;

let result = calculatePower(current, voltage);

console.log(result);



// 2- Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.



function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }

    return maxNumber;
}

let numbers1 = [3, 7, 2, 9, 1];
console.log(findMaxNumber(numbers1));

let numbers2 = [];
console.log(findMaxNumber(numbers2));


// 3-  Write a JavaScript function named ‘mergeArrays’ that takes two arrays as arguments and returns a new array.


function mergeArrays(array1, array2) {

    let mergedArray = [];
    mergedArray = mergedArray.concat(array1, array2);
    return mergedArray;
}

let array1 = [2, 3, 4, 5];
let array2 = [6, 7, 8, 9];

console.log(mergeArrays(array1, array2));


// 4- Create a function ‘arrayValuesTypes’ that takes an array and returns the types of values (data types) in a new array

function arrayValuesTypes(array) {
    let arrayTypes = [];

    array.forEach(element => {
        arrayTypes.push(typeof element);
    });

    return arrayTypes;
}

let result = arrayValuesTypes([1, 2, "null", []]);

console.log(result);
