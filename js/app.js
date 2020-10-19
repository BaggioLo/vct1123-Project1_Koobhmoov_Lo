var addToHead = document.querySelector('head');

var cssLink = document.createElement('link');

addToHead.appendChild(cssLink);

document.getElementsByTagName('link')[1].setAttribute('rel', 'stylesheet');

document.getElementsByTagName('link')[1].setAttribute('href', 'css/style.css');

// Added div and wrapper //
var bodY = document.querySelector('body');
var wrapper = document.createElement('div');
bodY.appendChild(wrapper);

document.getElementsByTagName('div')[0].classList.add('wrapper');

