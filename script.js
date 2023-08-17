const form = document.getElementById('item-form');

function onSubmit (e) {
  e.preventDefault();
  
  const item = document.querySelector('#item-input').value;
  const priority = document.querySelector('#priority-input').value;
  
  if(item === '' || priority === '0') {
    alert('Please fill all the fields');
    return;
  }
  console.log(item, priority);
}

function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);
  // What we pass in the parenthesis is the name attribute of the element
  const item = formData.get('item');
  const priority = formData.get('priority');
  console.log(item, priority);
}
form.addEventListener('submit', onSubmit2);