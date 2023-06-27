//variable hoisting
val = 2;
console.log(val);
var val;


//function hoisting
hello()
function hello() {
    console.log('Hello everyone');
}


// not a function error- if used in arrow function

// check();
// var check = () => {
//     console.log('Inside function');
// }

// Reference Error: cannot access function before initialization error- if used in arrow function

// checkNew();
// let checkNew = () => {
//     console.log('Inside function');
// }
