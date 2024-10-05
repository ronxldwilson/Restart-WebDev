"use strict";

function guess() {
    let guessNumber = document.getElementById("guessNum").value;
    document.getElementById("Display").innerText = guessNumber;
    console.log(guessNumber);
}
