function sayHello() {
    console.log('Hello World');
}

sayHello();

// Array Params

function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length + 1);

    const item = arr[randomIndex];
    console.log(item);
}

getRandom(1,2,3,4,5,6,7,8,9,10);