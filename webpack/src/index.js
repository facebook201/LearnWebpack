import { cube } from './math.js';

function component() {
  var ele = document.createElement('div');
  ele.innerHTML = [
    'hello',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  
  return ele;
}

document.body.appendChild(component());
