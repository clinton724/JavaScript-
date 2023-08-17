// Method 1
// window.addEventListener('keydown', (e) => {
//   const insert = document.querySelector('#insert');

//   insert.innerHTML = `<div class="key">
//                         ${e.key === ' ' ? 'Space' : e.key}
//                         <small>e.key</small>
//                       </div>

//                       <div class="key">
//                         ${e.keyCode}
//                         <small>e.keyCode</small>
//                       </div>

//                       <div class="key">
//                         ${e.code}
//                         <small>event.code</small>
//                       </div>`;
// })

// Method 2
function showKeyCodes (e) {
  const insert = document.querySelector('#insert');
  insert.innerHTML = ' ';
  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code
  }

  for(let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');
    const keyText = document.createTextNode(key);
    const keyCodeText = document.createTextNode(keyCodes[key]);
    div.appendChild(keyCodeText);
    small.appendChild(keyText);
    div.appendChild(small);
    insert.appendChild(div);
    console.log(keyCodes[key]);
  }
}

window.addEventListener('keydown', showKeyCodes);