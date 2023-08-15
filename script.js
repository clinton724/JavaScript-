const clearBtn = document.querySelector('#clear');
function onClear () {
  // const li = document.querySelectorAll('li');
  // li.forEach((item) => {
  //   item.remove();
  // })
  const ul = document.querySelector('ul');
  // const li = document.querySelectorAll('li');

  // li.forEach((item) => {
  //   ul.removeChild(item);
  // })

  /* Most performing */
  while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
  }
}
// JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('clear items');
// }

// addEventListener()
// clearBtn.addEventListener('click', function () {
//   alert('clear Items');
// });
// clearBtn.addEventListener('click', function () {
//   console.log('clear items');
// });
clearBtn.addEventListener('click', onClear);
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);