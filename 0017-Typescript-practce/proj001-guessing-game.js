"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const answer = Math.random();
function guess() {
    var _a, _b, _c;
    const guessNumber = document.getElementById("guessNum").value;
    // document.getElementById("Display").innerText = guessNumber;
    // console.log(guessNumber)
    let value = document.createElement('p');
    value.innerHTML = answer;
    document.appendChild(value);
    if (guessNumber == answer) {
        (_a = document.getElementById("Display")) === null || _a === void 0 ? void 0 : _a.innerText = "You got it right";
    }
    else if (guessNumber > answer) {
        (_b = document.getElementById("Display")) === null || _b === void 0 ? void 0 : _b.innerHTML = "Your Guess is higher";
    }
    else {
        (_c = document.getElementById("Display")) === null || _c === void 0 ? void 0 : _c.innerHTML = "Your Guess is Lower";
    }
}
