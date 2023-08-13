/* Higher order array methods */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Double numbers using map
let double = numbers.map(item => item * 2);
// console.log(double); 

// We can also chain array methods
// Example, get even numbers and double them

let evenDouble = numbers.filter((number) => number % 2 === 0)
                         .map((double) => double * 2);

console.log(evenDouble);