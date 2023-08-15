function removeClearButton () {
  const clearBtn = document.querySelector('#clear').remove();
  clearBtn.remove();
}

function removeFirstItem () {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:nth-child(1)');

  ul.removeChild(li);
}

function removeItem (itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

function removeItem2 (itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li');

  li.forEach((item, index) => {
    index == itemNumber ? ul.removeChild(item) : null;
  });
}

function removeItem3 (itemNumber) {
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();
}
//removeClearButton();
// removeFirstItem();
// removeItem(4);
// removeItem2(3);
removeItem3(4);