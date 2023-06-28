//Arrays as string values
var names = [];
names.push('Priya', "Ekanksha");
console.log(names);
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
//Arrays as numeric values
var numArray = [7, 8];
numArray.push(4, 5);
console.log(numArray);
//To prevent from push or any other changes - readonly
var numArray1 = [7, 8];
//numArray1.push(9,0) can't use push for readonly values 
console.log(numArray1);
//Array im
var nameV = [9, 0, 7, [98]]; //inferred to type number
nameV.push(9);
// nameV.push("2");    can't push string value  
console.log(nameV);
var head = numArray[0]; // no error
console.log(head);
