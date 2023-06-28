//Union
function myFunction(data: string | number) {
  console.log("HEY!!!!!!!!!!!!", data);
}
myFunction("everyone");
myFunction(200);

//function with return type
function funct(): number {
  return new Date().getTime();
}
console.log(funct());

//without return type -function
function funcNew(): void {
  console.log("Hi..void function");
}
funcNew();

//with paramaters
function funcParams(a: number, b: number) {
  return a + b;
}
console.log(funcParams(2, 8));

//TypeCasting
let ab: unknown = "Ankita Dhiman";
console.log((ab as string).length);

//type casting using <>
console.log((<string>ab).length);

//forcecasting
const artist = "Anuv Jain";
console.log((artist as unknown as string).length);
