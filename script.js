// Primitive Data Types

//Strings
let firstName = 'Sarah';

//Number
let age = 30;

//Boolean
let hasKids = true;

//null
let aptNumber = null;

//Undefined
let score;

//Symbol
let id = Symbol('id');

//Bigint
let n = 94725378483527574637373n;

//Reference Types
let arr = [1,2,3,4,5];

let person = {
    name: 'Brad'
};

function sayHello() {
    console.log('Hello')
}

let output = sayHello;

console.log(output, typeof output);