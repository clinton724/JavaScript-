function replaceFirstItem () {
  const firstItem = document.querySelector('li:nth-child(1)');

  const li = document.querySelector('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
}

function replaceSecondItem () {
  const secondItem = document.querySelector('li:nth-child(2)');
  secondItem.outerHTML = '<li> Replaced Second </li>';
}

function replaceAllItems () {
  const allItems = document.querySelectorAll('li');
  // Since this returns a nodelist, we can use array methods
  // If it had returned an HTMLcollection, we would have to use
  // Array.from()
  let counter = 1;
  allItems.forEach((item, index) => index === 1 ? item.innerHTML = '2nd One': item.innerHTML = `Replaced ${index}`);
}

function replaceChildHeading () {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');
  
  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping List2';
  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();