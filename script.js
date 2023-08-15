/* Keyboard events */
const itemInput = document.querySelector('#item-input');

const onKeyPress = (e) => {
  console.log('Key press');
};

const onKeyUp = (e) => {
  console.log('key up');
}

const onKeyDown = (e) => {
  // key
  // if(e.key === 'Enter') {
  //   alert('You pressed Enter');
  // }
  // keyCode
  // if(e.keyCode === 13) {
  //   alert('You pressed enter');
  // }
  // code
  if(e.code === 'Digit1') {
    console.log('You pressed 1');
  }

  if(e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  console.log('shift: '+e.shiftKey);
  console.log('control: '+e.ctrlKey);
  console.log('alt: '+e.altKey);
}
// itemInput.addEventListener('keypress', onKeyPress); 
// itemInput.addEventListener('keyup', onKeyUp); 
 itemInput.addEventListener('keydown', onKeyDown); 

