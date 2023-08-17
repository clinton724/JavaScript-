const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput (e) {
  console.log(e.target.value);
}

function onCheckbox (e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus (e) {
  console.log('Input is focus');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'red';
}

function onBlur (e) {
  console.log('Input is blur');
  itemInput.style.outlineStyle = 'none';
}
itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onCheckbox);

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);





