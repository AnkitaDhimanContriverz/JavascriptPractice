let tupleOne: [string, number];

tupleOne = ["Ankita", 3];

console.log(tupleOne);

// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.

//No safety in the tuple when push- any type of data can be pushed after exceeding the initial declaration count
tupleOne.push("new", "data", 23);
console.log(tupleOne);

//Try to make it readonly
let tupleTwo: readonly [number, string];
tupleTwo = [8, "ABc"];
//can't push when using readonly.
console.log(tupleTwo);

//named tuples
const main: [one: number, two: string] = [23, "Pqr"];
console.log(main);

//OBJECTS
const ob1: { id: number; data: string } = {
  id: 1,
  data: "Aish",
};
console.log(ob1);

//type infer in objects

const ob2 = {
  id: 2,
  data: "Ayushi",
};
console.log("before mod", ob2.data);

ob2.data = "Arushi"; //it will allow string but not number value
console.log("After mod", ob2.data);

//optional properties

const ob3: { brand: string; turnover: number } = {
  brand: "super dry",
  turnover: 560000, //comment to check error
};
ob3.turnover = 750000; //Property 'turnover' is missing in type '{ brand: string; }' but required in type '{ brand: string; turnover: number; }'

//way to solve it-
const ob4: { brand: string; turnover?: number } = {
  brand: "super dry",
};
ob4.turnover = 750000;

// Index Signatures
const ob5: { [index: string]: number } = {};
ob5.age = 20;
