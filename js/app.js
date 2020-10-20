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

// Creating variables divs and assigning it the value of wrapper_Divs //
var divOne = wrapper_Divs.item(0);
var divTwo = wrapper_Divs.item(1);
var divThree = wrapper_Divs.item(2);
var divFour = wrapper_Divs.item(3);


/* Creating array variable allDivs, assign divNumber variables
var allDivs = ["divOne", "divTwo", "divThree", "divFour"];
for (var i = 0; i < 4; i ++) {
    var myDiv = allDivs[i];
    myDiv[i].style.backgroundColor = colorsArray[i];
}
*/
// I added the styling individually because I could not figure out the for loop //
document.getElementsByClassName('wrapperDivs')[0].style.backgroundImage = "linear-gradient(135deg, #0B132B 0%, #3A506B 100%)";
document.getElementsByClassName('wrapperDivs')[1].style.backgroundImage = "linear-gradient(330deg, #5BC0BE 0%, #3A506B 100%)";
document.getElementsByClassName('wrapperDivs')[2].style.backgroundImage = "linear-gradient(35deg, #0B132B 0%, #5BC0BE 100%)";
document.getElementsByClassName('wrapperDivs')[3].style.backgroundImage = "linear-gradient(235deg, #5BC0BE 0%, #3A506B 100%)";

// created variable update and added it to my Div sections. Appended sections to each of the divs //
var myDiv = document.querySelector('.wrapperDivs');
var update = document.createElement('section');
myDiv.appendChild(update);

var myDiv1 = document.querySelectorAll('.wrapperDivs')[1];
var update1 = document.createElement('section');
myDiv1.appendChild(update1);

var myDiv2 = document.querySelectorAll('.wrapperDivs')[2];
var update2 = document.createElement('section');
myDiv2.appendChild(update2);

var myDiv3 = document.querySelectorAll('.wrapperDivs')[3];
var update3 = document.createElement('section');
myDiv3.appendChild(update3);

// Adding in attribute method //

document.getElementsByTagName('section')[0].setAttribute('id', 'ID' + [0]);
document.getElementsByTagName('section')[1].setAttribute('id', 'ID' + [1]);
document.getElementsByTagName('section')[2].setAttribute('id', 'ID' + [2]);
document.getElementsByTagName('section')[3].setAttribute('id', 'ID' + [3]);
