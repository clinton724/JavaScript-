
// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'my-title');

// const text = document.createTextNode('Hello World');
// div.appendChild(text);
// // document.body.appendChild(div);
// document.querySelector('ul').appendChild(div);
// console.log(div);

// Challenge creating elements and appending them
const li = document.createElement('li'); // create the actual element
li.className = 'item'; // Assign it a class (optional)
const text = document.createTextNode('Tomatoes'); // set the text of the tag
li.appendChild(text); // append the text
document.body.querySelector('ul').appendChild(li); // finally, append the child
const button = document.createElement('button');
button.className = 'remove-item btn-link text-red';
li.appendChild(button);
const icon = document.createElement('i'); // This is an icon
icon.className = 'fa-solid fa-xmark';
button.appendChild(icon);


const capitilizedWords = words.map((item) => {
     return item[0].toUpperCase() + item.slice(1);
})
console.log(capitilizedWords);