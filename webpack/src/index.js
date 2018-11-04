function component() {
  var ele = document.createElement('div');
  ele.innerHTML = 'webpack-react';
  return ele;
}

document.body.appendChild(component());
