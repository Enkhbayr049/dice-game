// toglogchiin eeljiig hadgalh huvsagch negugeer toglogch 0 hoyrdugaar toglogch 1
var activePlayer = 1;

// togldogch D giin togson onoog hadgalna
var scores = [0, 0];

// tolgogchiin eeljindee avsan onoog hadgalah huvsahch
var roundScore = 0;

// shoo ali talaara buusniig hadgalah huvsahch 1-6 gesen utga sanamsargui ogno


// program ehlehd boldeh
document.getElementById("score-0").textContent=0;
document.getElementById("score-1").textContent=0;

document.getElementById("current-0").textContent=0;
document.getElementById("current-1").textContent=0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = 'none';


document.querySelector(".btn-roll").addEventListener("click", function shooshid() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = 'block';
    diceDom.src = "dice-" + diceNumber + ".png";
});
