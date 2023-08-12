let name = 'John';
let age = 31;

let myString = 'my name is clinton letsoela';

let x = myString.split(' ');

let myNewString = '';

for(let i = 0;i < x.length;i++) {
    myNewString += x[i][0].toUpperCase() + x[i].substring(1) + ' ';
}

console.log(myNewString);