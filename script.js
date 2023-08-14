/* Traversing the DOM - Nodes*/
// Getting child nodes from the parent
let ouput

const parent = document.querySelector('.parent');
output = parent.childNodes; // white space counts as text in html
output = parent.childNodes[0];
parent.childNodes[3].style.color = 'red';
parent.childNodes[3].innerText = 'Child One';

output = parent.firstChild;
parent.lastChild.textContent = 'Hello';

// Getting parent nodes from the children
const child = document.querySelector('.child');
output = child;
output = child.parentNode;
// parentNode and parentElement are the same
child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Getting siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling; // Note the difference between nextElementSibling and nextSibling
console.log(output);

