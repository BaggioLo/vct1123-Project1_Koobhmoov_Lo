// Creating link within head and setting attributes //
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

// Repeat to create four 'div' elements //
// created new variable 'divs' and div element//
// 4 divs are nested within wrapper variable //
// added class name 'wrapperDivs' to divs variable//
for (var i = 0; i < 4; i ++) {
    var divs = document.createElement("div");
    divs.classList = 'wrapperDivs';
    wrapper.appendChild(divs);
}

// Creating variables: color1, color2, color3, color4 //
var color1 = "linear-gradient(135deg, #0B132B 0%, #3A506B 100%)";
var color2 = "linear-gradient(330deg, #5BC0BE 0%, #3A506B 100%)";
var color3 = "linear-gradient(35deg, #0B132B 0%, #5BC0BE 100%)";
var color4 = "linear-gradient(235deg, #5BC0BE 0%, #3A506B 100%)";

var colorsArray = ["color1", "color2", "color3", "color4"];

// Creating variable wrapper_Divs, assigning wrapperDivs to variable //

var wrapper_Divs = document.getElementsByClassName('wrapperDivs');