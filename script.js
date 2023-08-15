const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
  if(document.body.style.backgroundColor != 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

const onRightClick = () => console.log('Right click event');
const onMouseDown = () => console.log('Mouse down event');
const onMouseWheel = () => console.log('Mouse wheel event');
const onMouseOver = () => console.log('Mouse over event');
const onDragStart = () => console.log('Drag start event');
const onDrag = () => console.log('Drag event');



// Event Listeners
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);



