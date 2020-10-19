var addToHead = document.querySelector("head");

var cssLink = document.createElement("link");

addToHead.appendChild(cssLink);

document.getElementsByTagName("link").setAttribute("rel", "stylesheet");

