var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function dice_changer(random_n, player) {
    var type;
    if (player == 1)
        type = ".img1";
    else
        type = ".img2";

    if (random_n === 1) {
        document.querySelector(type).setAttribute("src", "./images/dice1.png");
    }
    else if (random_n === 2) {
        document.querySelector(type).setAttribute("src", "./images/dice2.png");
    }
    else if (random_n === 3) {
        document.querySelector(type).setAttribute("src", "./images/dice3.png");
    }
    else if (random_n === 4) {
        document.querySelector(type).setAttribute("src", "./images/dice4.png");
    }
    else if (random_n === 5) {
        document.querySelector(type).setAttribute("src", "./images/dice5.png");
    }
    else {
        document.querySelector(type).setAttribute("src", "./images/dice6.png");
    }
}
dice_changer(randomNumber1, 1);
dice_changer(randomNumber2, 2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩"
}
