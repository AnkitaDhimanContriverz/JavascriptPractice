let abc: string = "Ankita";
console.log("My name is", abc);

function newFunc(val: number, val2: number) {
  console.log("The outpur is-", val + val2);
}
newFunc(50, 30);

function func(a: number, b: number): number {
  return a + b;
}

console.log(func(30, 4));

const arr = ["abc", "def", "bbc", "sql"];
arr.forEach((item) => {
  console.log(item.toUpperCase());
});

arr.map(function (s) {
  console.log(s);
});

let arr1: []; //empty array
let arr2: string[] = ["1", "2", "3"]; //string array
console.log(arr2);
let arr3: Array<any> = ["Ankita", "Anita", 6, 9, null, undefined, false]; //generic type
console.log(arr3);
let arr4: Array<number | string> = ["Amjl", 4]; //multi-type array
console.log(arr4);

function power(base: number, pow: number) {
  var final = 1;
  var i = 1;
  for (i; i <= pow; i++) {
    final = final * base;
  }
  return final;
}
const result: number = power(8, 2);
console.log("The result is", result);
