var abc = "Ankita";
console.log("My name is", abc);
function newFunc(val, val2) {
    console.log("The outpur is-", val + val2);
}
newFunc(50, 30);
function func(a, b) {
    return a + b;
}
console.log(func(30, 4));
var arr = ["abc", "def", "bbc", "sql"];
arr.forEach(function (item) {
    console.log(item.toUpperCase());
});
arr.map(function (s) {
    console.log(s);
});
var arr1; //empty array
var arr2 = ["1", "2", "3"]; //string array
console.log(arr2);
var arr3 = ["Ankita", "Anita", 6, 9, null, undefined, false]; //generic type
console.log(arr3);
var arr4 = ["Amjl", 4]; //multi-type array
console.log(arr4);
function power(base, pow) {
    var final = 1;
    var i = 1;
    for (i; i <= pow; i++) {
        final = final * base;
    }
    return final;
}
var result = power(8, 2);
console.log(result);
