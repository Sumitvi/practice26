//This keyword in JavaScript


const student = {
    name: "Sumit",
    age: 19,
    math: 90,
    phy: 95,
    eng: 78,

    getAvg() {

        let avg = (this.math + this.phy + this.eng) / 3;
        console.log(avg);

    }
}


// Try Catch in JavaScript

console.log("Hello");
console.log("Hello");

try {
    console.log(a);
} catch {
    console.log("a is not defined");
}
console.log("Hello");
console.log("Hello");
console.log("Hello");


// Arrow function in JS


const sum = (a, b) => {
    console.log(a + b);
}

const greet = () => {
    console.log("Hello everyone");
}

const pow = (a, b) => {
    console.log(a ** b);
}

const cube = (n) => {
    console.log(n * n * n);
}


// Implicit return in arrow function

const mul = (a, b) => a * b;

const diff = (a, b) => a - b;


// SetTimeout Function

setTimeout(()=>{
    console.log("Apna Collge");
},4000)

console.log("welcome to");



let greeting=()=>{
    console.log("Subscibe my channel");
}

console.log("Welcome to Apnablog");

setTimeout(greeting,4000);


const id = setInterval(()=>{
    console.log("Hello Webpage");

},2000)




// Write an arrow function that return a square of a  number

let square = (a) => {
    return a * a;
}

setInterval(()=>{
    console.log("Hello world");
    console.log("Hello world");
    console.log("Hello world");
    console.log("Hello world");
    console.log("Hello world");


},2000)

let arr = [2, 3, 4, 67, 8, 9, 10];

const arrayAverage = (arr) => {
    let sum = 0;
    for (item of arr) {

        sum += item;
    }
    return sum / arr.length;
}

// console.log(arrayAverage(arr));


// let num=prompt("Enter any number");
const isEven = (num) => {
    if (num % 2 == 0) {
        console.log("It is even");
    } else {
        console.log("It is odd");
    }
}

// console.log(isEven(num));



const obj={
    message:"Hello world",
    longMessage(){
        console.log(this.message);
    }
}

// setTimeout(obj.message,1000);

let length=4;
function callback(){
    console.log(this.callback);
}

let object={
    length:5,
    method(callback){
            callback();
    }
}

// object.method(callback,1,2);