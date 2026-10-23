/*slice() versus splice()
These methods look similar but work differently.
slice() — extract a portion
splice() — remove, insert, or replace */
let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 4);

console.log(result);  // [20, 30, 40]
console.log(numbers); // [10, 20, 30, 40, 50]

let num = [10, 20, 30, 40];

num.splice(1, 2);

console.log(num); // [10, 40]Here, start at index 1 and remove 2 elements.

//Insert an element:
let numbers1 = [10, 30];

numbers1.splice(1, 0, 20);

console.log(numbers1); // [10, 20, 30]
//Replace an element:
let number = [10, 20, 30];

number.splice(1, 1, 99);

console.log(number); // [10, 99, 30]