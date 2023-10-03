// toglogchiin eeljiig hadgalh huvsagch negugeer toglogch 0 hoyrdugaar toglogch 1
var activePlayer = 1;

// togldogch D giin togson onoog hadgalna
var scores = [0, 0];

// tolgogchiin eeljindee avsan onoog hadgalah huvsahch
var roundScore = 0;

// shoo ali talaara buusniig hadgalah huvsahch 1-6 gesen utga sanamsargui ogno
var dice = Math.floor(Math.random() * 6) + 1;



// program ehlehd boldeh
document.querySelector("#score-0").textContent=0;
document.querySelector("#score-1").textContent=0;

document.querySelector("#current-0").textContent=0;
document.querySelector("#current-1").textContent=0;

document.querySelector(".dice").style.display = 'none';
// document.querySelector("#score-0").textContent=dice;