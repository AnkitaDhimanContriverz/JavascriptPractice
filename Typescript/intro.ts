//Type assignment

//explicit
let user: string = "Ankita";
console.log(user);

//implicit
const username = "Ankita Dhiman";
console.log(username);

//any 
let num: any = "Priya";
num = 1.5
console.log(Math.round(num));

//unknown
let str: unknown = 5;
str = "abc"
console.log(str);

//undefined
let val1: undefined = undefined;
console.log(typeof (val1));

//null
let val2: null = null;
console.log(typeof (val2));

//function
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));