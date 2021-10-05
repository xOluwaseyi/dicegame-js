var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var images1 = "images/dice" + randomNumber1 + ".png";
var images2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", images1);
document.querySelector(".img2").setAttribute("src", images2);

if ( randomNumber1 === randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Draw";
}
else if (randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}