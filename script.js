/* Methods for selecting specific elements */

// document.getElementById()
let output;
output = document.getElementById('app-title');
output = document.getElementById('app-title').getAttribute('id');

// Set attributes
output = document.getElementById('app-title').setAttribute('class', 'title');
const title = document.getElementById('app-title');

// Get/ Change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerHTML = '<strong> Shopping List </strong>';

// Change Style
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()
console.log(document.querySelector('h1')); // we can select using the html tag
console.log(document.querySelector('#app-title')); // we can select by id
console.log(document.querySelector('.container')); // we can select by class
console.log(document.querySelector('input[type="text"]')); // we can select by text

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
console.log(firstItem);
firstItem.style.color = 'blue';







