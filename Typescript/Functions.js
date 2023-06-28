//Union
function myFunction(data) {
    console.log("HEY!!!!!!!!!!!!", data);
}
myFunction("everyone");
myFunction(200);
//function with return type
function funct() {
    return new Date().getTime();
}
console.log(funct());
//without return type -function
function funcNew() {
    console.log("Hi..void function");
}
funcNew();
//with paramaters
function funcParams(a, b) {
    return a + b;
}
console.log(funcParams(2, 8));
//TypeCasting
var ab = "Ankita Dhiman";
console.log(ab.length);
//type casting using <>
console.log(ab.length);
//forcecasting
var artist = "Anuv Jain";
console.log(artist.length);
var interFace = {};
interFace.name = "John Doe";
console.log(interFace);
