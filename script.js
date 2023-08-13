/* Higher order array Challenges */
// Challenge 1
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const younPeople = people.filter((item) => {
    return item.age <= 25;
}).map((element) => {
    return {name: `${element.firstName} ${element.lastName}`, email: element.email};
})

// Challenge 2
const numbers = [2, -38, 50, 20, -21, -9, 7];
const sum = numbers.filter((item) => {
    return item > 0;
}).reduce((accumulate, currentValue) => {
    return accumulate + currentValue;
}, 0);

// Challenge 3
const words = ['coder', 'programmer', 'developer'];

const capitilizedWords = words.map((item) => {
     return item[0].toUpperCase() + item.slice(1);
})
console.log(capitilizedWords);