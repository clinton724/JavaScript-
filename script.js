/* Traversing the DOM - Elements*/
// Get child elements from parent
let output

const parent = document.querySelector('.parent');

output = parent.children;
output = parent.children[1].innerText;
output = parent.firstElementChild.innerText;
output = parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child
const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
// output = secondItem.nextSibling; // nextSibling will give us the next node, regardless of what it is.
// We should use the nextElementSibling
output = secondItem.nextElementSibling;
output = secondItem.previousElementSibling;
console.log(output);

