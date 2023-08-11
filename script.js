// These values are stored on the stack
let name = 'John';
let age = 30;

// Reference values are stored on the heap
let person = {
    name: 'Brad',
    age: 40
};

let newName = name;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Bradly';
console.log(person, newPerson);