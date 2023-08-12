let x;

//const todo = {};
//Another way to do this

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;
x = Object.keys(todo).length;

console.log(x);