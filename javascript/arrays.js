const arr = [1, 2, 3, 5, 7]

//length
console.log(arr.length);

//join
console.log(arr.join('-'));

//to string
console.log(arr.toString());

//pop
arr.pop();
console.log(arr);

//push
arr.push('abc')
console.log(arr);

//shift
arr.shift()
console.log(arr);

//unshift
arr.unshift('Peach')
console.log(arr);

//changing array values
arr[2] = 5;
console.log(arr);

//merging 
const arr2 = [50, 'npo', 20]
console.log(arr.concat(arr2));

//merging more than one array
const arr3 = ['A', 'D', 'C', 'F']
const arr4 = [0, 0, 0]
console.log(arr.concat(arr2, arr3, arr4));

//flattening array
const arr5 = [2, 6, 9, [2, 6, , [4, 6, ['', '', 0]], [0, 8]]]
const flated = arr5.flat(Infinity)
console.log(flated);

//slice
console.log(flated.slice(2, 7));
console.log(flated.slice(7, 10));

//splice
arr3.splice(0, 1, 6)
console.log(arr3)

//reverse
console.log(arr.reverse());

//sorting of integer value using compare function
console.log(arr3.sort());

//ascending order
console.log(flated.sort(function (a, b) { return a - b }));

//descending order
console.log(flated.sort(function (a, b) { return b - a }));


//maximum value in an array
function myArrayMax(array) {
    return Math.max.apply(null, array)
}
console.log(myArrayMax(flated));

//minimum value in an array
function myArrayMin(array) {
    return Math.min.apply(null, array)
}
console.log(myArrayMin(flated));



const arrNew = ['one', 'two', 'one', 'two', 'one', 'three'];

const count = {};

arrNew.forEach(element => {
    console.log(count);
    // console.log(count[element])
    count[element] = (count[element] || 0) + 1;
});

console.log(count);
