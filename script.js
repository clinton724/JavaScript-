// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

// Variable re-assignment
let score = 1;

console.log(score);

if (true) {
    score += 1;
}

console.log(score);

const x = 100;

// const variables cannot be re-assigned
// x = 200;

// const variables must be initialised
// const score1; cannot be done

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

// Declare multiple variables at once

let a, b, c;
