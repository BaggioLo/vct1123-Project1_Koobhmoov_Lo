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

var colorsArray = [color1, color2, color3, color4];

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

// Created function Artist

function Artist(artistname, album, label, year, albumlmg, bio){
    this.artistname = artistname;
    this.album = album;
    this.label = label;
    this.year = year;
    this.albumlmg = albumlmg;
    this.bio = bio
}

var artist1 = new Artist('Autechre', 'Quaristice', 'Warp Records', '2008', 'quaristice_', "Autechre are an English electronic music duo consisting of Rob Brown and Sean Booth, both from Rochdale, Greater Manchester. Formed in 1987, they are one of the best known acts signed to UK electronic label Warp Records, through which all of Autechre's full-length albums have been released beginning with their 1993 debut Incunabula. \nThey gained initial recognition when they were featured on Warp's 1992 compilation Artificial Intelligence. Influenced by styles such as electro and acid house, the music of Autechre has evolved throughout their career from early, melodic techno recordings to later works often considered abstract and experimental, featuring complex algorithm-generated production and few stylistic conventions. Their work has been associated with the 1990s electronic genre known as intelligent dance music (IDM), though Booth has dismissed the label as \"silly.\"")

var artist2 = new Artist('Aphex Twin', 'Richard D. James Album and Come to Daddy', 'Warp Records', '1996', 'richardDJames', "Richard David James (born 18 August 1971), best known by the stage name Aphex Twin, is an English musician.[1] He is best known for his idiosyncratic work in electronic styles such as techno and ambient music in the 1990s, and has also been associated with the electronic subgenre known as intelligent dance music.[2][3] In 2001, Guardian journalist Paul Lester called James 'the most inventive and influential figure in contemporary electronic music'. Raised in Cornwall, James began performing as a rave DJ at local clubs and free parties in the late 1980s.[5] In 1991 his debut EP Analogue Bubblebath was released on Mighty Force, a local independent label, winning him acclaim and a cult following.[6][7] James co-founded the independent label Rephlex Records the same year. He attracted wider praise for his 1992 debut album Selected Ambient Works 85–92 and signed to the record label Warp the following year. His music became increasingly well-known through the 1990s with the charting albums Selected Ambient Works Volume II (1994) and ...I Care Because You Do (1995), and singles 'On' (1993), 'Come to Daddy' (1997), and 'Windowlicker' (1999). The latter two singles, accompanied by music videos directed by Chris Cunningham, brought James attention in the US market. James has also recorded under aliases including AFX, Caustic Window, and Polygon Window.[4] After releasing the Aphex Twin album Drukqs in 2001, James spent the following years releasing music mostly under other aliases, including the 2005 Analord EP series as AFX, a pair of 2007 releases as the Tuss, and archival material such as an unreleased 1994 LP in 2014 as Caustic Window. He returned as Aphex Twin in 2014 with the album Syro, which won the Grammy Award for Best Dance/Electronic Album. He has since released further charting EPs, including Cheetah (2016) and Collapse (2018).")

var artist3 = new Artist('Future Sounds of London', 'Dead Cities', 'Astralwerks/Virgin Records', '1996', 'deadCities', "The Future Sound of London (often abbreviated to FSOL) is a British electronic music group composed of Garry Cobain and Brian Dougans. The duo are often credited with pushing the boundaries of electronic music experimentation and of pioneering a new era of dance music. Although often associated with ambient music, Cobain and Dougans usually resist being typecast into any one particular genre. Their work covers many areas of electronic music, such as ambient techno, house music, trip hop, ambient dub, and acid techno. In addition to music composition, their interests have covered a number of areas including film and video, 2D and 3D computer graphics, animation in making almost all their own videos for their singles, radio broadcasting and creating their own electronic devices for sound making.They have released works under numerous aliases.\nThe artists were fairly enigmatic in the past but have become more candid with their fanbase in recent years with social websites like Myspace, YouTube, their forum and many interviews in which Cobain almost always speaks for the group.")

var artist4 = new Artist('Kraftwerk', 'Computer World', 'Kling Klang/Warner Brothers', '1981', 'computerWorld', "Kraftwerk (German: [kʁaftvɛɐ̯k], lit. power station) is a German band formed in Düsseldorf in 1970 by Ralf Hütter and Florian Schneider. Widely considered as innovators and pioneers of electronic music, they were among the first successful acts to popularize the genre. The group began as part of West Germany's experimental krautrock scene in the early 1970s before fully embracing electronic instrumentation, including synthesizers, drum machines, and vocoders.\nOn commercially successful albums such as Autobahn (1974), Trans-Europe Express (1977), and The Man-Machine (1978), Kraftwerk developed a self-described \"robot pop\" style that combined electronic music with pop melodies, sparse arrangements, and repetitive rhythms, while adopting a stylized image including matching suits. Following the release of Electric Café (1986), member Wolfgang Flür left the group in 1987; the band's other longtime percussionist, Karl Bartos, did the same in 1990. Founding member Schneider departed in 2008.\nThe band's work has influenced a diverse range of artists and many genres of modern music, including synthpop, hip hop, post-punk, techno, ambient, and club music. In 2014, the Recording Academy honoured Kraftwerk with a Grammy Lifetime Achievement Award. Their latest album 3-D The Catalogue was released in 2017. As of 2019, the remaining members of the band continue to tour.")

var allArtists = [artist1, artist2, artist3, artist4];

function getArtist(){
    
}

