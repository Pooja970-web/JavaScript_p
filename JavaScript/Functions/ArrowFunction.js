//Arrow functions provide a shorter syntax for writing functions.
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20)); // 30
//You can shorten it further when the body contains just one expression:
const add1 = (a, b) => a + b;

console.log(add1(10, 20)); // 30