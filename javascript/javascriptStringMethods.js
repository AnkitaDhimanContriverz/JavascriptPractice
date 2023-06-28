const name = " Ankita ";

//length Method
console.log(name.length);

//trim method
const correctName = name.trim();
console.log(correctName.length);

//slice method
const stringTest = "JavaScript String Methods";
console.log(stringTest.slice(4));
console.log(stringTest.slice(4, 15))
console.log(stringTest.slice(-10));
console.log(stringTest.slice(-10, -6));

//substring method
const string2 = "Mountains are the beginning and the end of all natural scenery"
console.log(string2.substring(10));
console.log(string2.substring(10, 17));

//substr method
const string3 = "Welcome to our team";
console.log(string3.substr(10, 5));

//padStart
const string4 = "5";
const numString = string4.toString();
console.log(string4.padStart(5, "*"));
console.log(string4.padEnd(5, "*"));

//replace and replaceAll
const string5 = "If you want to replace all matches,you can use regular g flag";
const newString = string5.replace('you', 'we')
console.log(newString);

const newAllReplaced = string5.replaceAll('you', 'we')
console.log(newAllReplaced);

//uppercase
const upperCase = string5.toUpperCase();
console.log(upperCase);

//lowercase
const lowerCase = upperCase.toLowerCase();
console.log(lowerCase);

//conact 
console.log(string3.concat(" " + string4));
//charAt
console.log(string3.charAt(5));

//string to array
console.log(string5.split(','))

//indexOf
console.log(string5.indexOf('can'));

//match
console.log(string5.match('you'));