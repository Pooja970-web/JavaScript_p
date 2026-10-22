//var is function-scoped, while let is block-scoped.
if (true) {
    var a = 10;
    let b = 20;
}

console.log(a); // 10
console.log(b); // Error!

//Remember these two rules:
//- var can be accessed outside an if block, but not outside the function in which it was declared.
//- let can only be accessed inside the block in which it was declared.
