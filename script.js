/* document.querySelectorAll() */
// We can only use array methods to Nodelists but not to htmlcollections
// We have to use Array.from() to convert from HTMLCollection to array

/** For most cases, we will use the querySelectorAll method **/
// const listItems = document.querySelectorAll('.item'); // Here we can use the forEach because it is a Nodelis
// console.log(listItems);

// listItems.forEach((item) => {
//     item.style.color = 'blue';
// })

// const listItems = document.getElementsByClassName('item'); // We cannot use the forEach function, it is an HTMLcollection
// const listItemsArray = Array.from(listItems);

// listItemsArray.forEach((item) => {
// console.log(item.innerText);
// })

const listItem3 = document.getElementsByTagName('li'); // Also htmlCollection
console.log(listItem3)