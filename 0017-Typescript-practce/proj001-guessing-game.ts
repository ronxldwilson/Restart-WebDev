import { couldStartTrivia } from "typescript";

const answer = Math.random();

function guess(){
	const guessNumber: number = document.getElementById("guessNum").value;
	// document.getElementById("Display").innerText = guessNumber;
	// console.log(guessNumber)
	
	let value = document.createElement('p');
	value.innerHTML = answer;
	document.appendChild(value)
	
	if( guessNumber == answer){
		document.getElementById("Display")?.innerText = "You got it right"
	}
	else if( guessNumber > answer ){
		document.getElementById("Display")?.innerHTML = "Your Guess is higher"
	}
	else{
		document.getElementById("Display")?.innerHTML = "Your Guess is Lower"
	}
}
