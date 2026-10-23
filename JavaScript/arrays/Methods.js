/*push()
Add to the end*/
let a = [1, 2];
a.push(3);
console.log(a); // [1, 2, 3]

/*pop()
Remove from the end*/
let b = [1, 2, 3];
let x = b.pop();
console.log(x); // 3
console.log(b); // [1, 2]

/*unshift()
Add to the beginning*/
let a1 = [2, 3];
a1.unshift(1);
console.log(a1); // [1, 2, 3]

//shift()
//Remove from the beginning
let c = [1, 2, 3];
let z = c.shift();
console.log(z); // 1
/*Important: push() and unshift() return the new length, while pop() 

and shift() return the removed element.*/

/*Method	What it does	Example result
includes()	Checks whether a value exists	[10,20].includes(20) → true
indexOf()	Finds the first matching index	[10,20,10].indexOf(10) → 0
lastIndexOf()	Finds the last matching index	[10,20,10].lastIndexOf(10) → 2
find()	Returns the first matching element	[4,7,10].find(n => n > 5) → 7
findIndex()	Returns the index of the first match	[4,7,10].findIndex(n => n > 5) → 1
some()	Checks if at least one element matches	[1,8,3].some(n => n > 5) → true
every()	Checks whether all elements match	[2,4,6].every(n => n % 2 === 0) → true*/