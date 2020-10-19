var addToHead = document.querySelector('head');

var cssLink = document.createElement('link');

addToHead.appendChild(cssLink);

document.getElementsByTagName('LINK').setAttribute('rel', 'stylesheet');

document.getElementsByTagName('LINK').setAttribute('href', 'css/style.css');

var wrapper = document.createElement('div');

document.getElementsByTagName('div').classList.add('wrapper');

var bodY = document.querySelector('body');

bodY.appendChild(wrapper);

