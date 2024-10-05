

const answer = Math.random();

function guess(){
	const guessNumber: number = document.getElementById("guessNum").value;
	document.getElementById("Display").innerText = guessNumber;
	console.log(guessNumber)	
}
