import 'bootstrap';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = 'Hello cantagal';

  return element;
}

document.body.appendChild(component());
