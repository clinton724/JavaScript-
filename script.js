/* Function Challenge */

// // Challenge 1
// const getCelsius = (x) => (x - 32) * 5 / 9; 

// //console.log(`The temperature in Celsius is ${getCelsius(32)} \xB0C`);

// // Challenge 2
// const minMax = (rest) =>  {return {min:Math.min(...rest), max:Math.max(...rest)};}

// // console.log(minMax([1,2,3,4,5,6,7]));

// // Challenge 3
// (function (length, width) {
//     const area = length * width;
//     console.log(`The area of a rectangle with a length of ${length} and a width
//     of ${width} is ${area}`);
// })(10, 5);

/* Calculator Challenge */
 function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation.';
    }
    return result;
 }

 console.log(calculator(100, 50, ';'));