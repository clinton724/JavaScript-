/* Higher order array methods */
/* Important methods: 
   - arr.forEach(): doesn't return anything
   - arr.filter(): returns something
   - arr.map(): doesn't return anything
   - arr.reduce(): returns something
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using the reduce method to find the sum of all numbers

let sum = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);

const cart = [
    {id: 1, name: 'Product 1', price: 130},
    {id: 2, name: 'Product 2', price: 150},
    {id: 3, name: 'Product 3', price: 175},
];

let sum2 = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
}, 0);
console.log(sum2);