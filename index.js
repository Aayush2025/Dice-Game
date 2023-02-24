var randomNumber1 = Math.floor(Math.random() * 6) + 1;//Random number between 1-6
var randomdiceImage = "dice" + randomNumber1 + ".png";//dice1.png-dice6.png
var randomImageSource = "images/" + randomdiceImage;//images/dice1.png-images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//For Second dice we have to do the same
var randomNumber2 = Math.floor(Math.random() * 6) + 1;//Generates number between 1-6
var randomdiceimage2 = "dice" + randomNumber2 + ".png";//dice1.png-dice6.png;
var randomImageSource2 = "images/" + randomdiceimage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//if conditions

if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"

else if(randomNumber2 > randomNumber1)
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"

else
document.querySelector("h1").innerHTML = "🚩Draw!🚩"
