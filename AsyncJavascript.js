
function myDisplayer(data) {
    console.log(data)
}

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

mySecond();
myFirst();

//Callback function
const calledFunction = (result) => {
    console.log("Result------------", result);

}

const AddFunction = (a, b, cFunc) => {
    let sum = a + b
    cFunc(sum)
}

AddFunction(10, 20, calledFunction)


//promises
async function myFunction() {
    return "Hello";
}
myFunction().then((value) => {
    myDisplayer(value);
}
)
    .catch((error) => myDisplayer(error))



