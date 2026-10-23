//Method 1: Array literal — most common

let fruits = ["Apple", "Mango", "Banana"];
let numbers = [10, 20, 30, 40];
let emptyArray = [];
//Method 2: Using the Array constructor

let numbers1 = new Array(10, 20, 30);

console.log(numbers1); // [10, 20, 30]

//.length tells you the number of elements in an array.
let numbers2 = [10, 20, 30, 40];

console.log(numbers2.length); // 4

//Modern JavaScript also provides .at():
console.log(numbers2.at(-1)); // 40
console.log(numbers2.at(-2)); // 30
//Unlike normal bracket indexing, .at(-1) gets the last element.