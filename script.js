// insertAdjacentElement Example
function insertElement () {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';
  filter.insertAdjacentElement('afterbegin', h1);
}
// insertAdjacentText Example
function insertText () {
  item = document.querySelector('li');
  item.insertAdjacentText('afterend', 'insertAdjacentText');
}

// insertAdjacentHTML Example
// note that the . represents a class and the # represents an id for the queryselector
function insertHTML () {
  const clearBtn = document.querySelector('#clear');
  clearBtn.insertAdjacentHTML('beforeend','<h2>insertAdjacentHTML</h2>');
}
// insertBefore Example
function insertBeforeItem () {
   const ul = document.querySelector('ul');
   const li = document.createElement('li');
   li.textContent = 'insertBefore';

   const thirdItem = document.querySelector('li:nth-child(3)');
   ul.insertBefore(li, thirdItem);
}

insertElement();
//insertText();
insertHTML();
insertBeforeItem();
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
   foo
  <!-- beforeend-->
</p>
<!-- afterend -->
*/