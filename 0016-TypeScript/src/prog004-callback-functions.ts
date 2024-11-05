
function fun(callback: () => void){
	setTimeout(callback,1000);
}

function passedFn(){
	console.log("Hello from Callback");
}

fun(passedFn)
