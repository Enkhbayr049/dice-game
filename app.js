// toglogchiin eeljiig hadgalh huvsagch negugeer toglogch 0 hoyrdugaar toglogch 1
var activePlayer = 0;

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
// currunt onoog tegleh 


// end teglle

var diceDom = document.querySelector(".dice");
diceDom.style.display = 'none';

// shoo shiddeg heseg event click heseg     
document.querySelector(".btn-roll").addEventListener("click", function shooshid() {
    // negees 6 hurtel sanamsargui too gargaj avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // buusan tooni zurgiig gargaj irne
    diceDom.style.display = 'block';
    diceDom.src = "dice-" + diceNumber + ".png";
    if (diceNumber !== 1) {
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // document.getElementById("current-0").textContent=0;
        // roundScore = 0;
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        diceDom.style.display = 'none';
    }
});
// toglogchiin eeljiin onoog oorchilno buusan too ni negees yalgaatai bol active toglogchiin onoog nemne