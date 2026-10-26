//A callback is a function passed to another function as an argument, so the receiving function can call it.
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Pooja", sayBye);