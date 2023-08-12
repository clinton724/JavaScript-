/* Number Challenge */

// let x = Math.floor(Math.random() * 100 + 1);
// let y = Math.floor(Math.random() * 50 + 1);

// let sum = x + y;
// let difference = Math.abs(x-y);
// let product = x * y;
// let quotient = x / y;
// let remainder = x % y;

// let sumResult = `${x} + ${y} = ${sum}`;
// let differenceResult = `${x} - ${y} = ${difference}`;
// let productResult = `${x} * ${y} = ${product}`;
// let quotientResult = `${x} / ${y} = ${quotient}`;
// let remainderResult = `${x} % ${y} = ${remainder}`;

// console.log(sumResult);
// console.log(differenceResult);
// console.log(productResult);
// console.log(quotientResult);
// console.log(remainderResult);

/* Arrays and Objects */
// Array Literal
// const arr = [1, 3, 2, 6];

// // Array constructor
// const fruits = new Array('apple', 'orange', 'banana');

// // Young can an array that contains different types
// // Adding
// fruits[fruits.length-1] = 'pear';

// /* Array Methods */
// let x;
// const arr = [34, 55, 95, 20, 15];
// arr.push(100);
// arr.unshift(99);
// arr.shift();

// x = arr.includes(20)
// console.log(arr);

// /* Array Challenge */
// let arr = [1, 2, 3, 4, 5];
// arr.unshift(0);
// arr.push(6);
// arr.reverse();

// /* Challenge 2 - Concatenation */
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];
// arr2.shift();
// const arr3 = arr1.concat(arr2);

/* Object Literals */
let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA'
    }
};

x = person.name;
person.hasChildren = true;
person.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} old.`);
}
person.greet();
console.log(person);
