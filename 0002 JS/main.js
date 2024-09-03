function sum(num1, num2,fun){
    let result = num1+num2;
    console.log(result);
    fun(result);
}

function abc(data){
    console.log("This is function abc"+data);
}

function xyz(data){
    console.log("This is function xyz"+data);
}

const ans = sum(1 ,2 , abc);

// counter from 30 to 0 for each second

let data1 =30;

const date = new Date();


function printTime(){
    console.log(data1);
    console.log()
    data1--;
    // Get the current time
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let millisec = date.getMilliseconds();
    // let difference = 
    // Format the time as a string
    let time = `${hours}:${minutes}:${seconds}:${millisec}`;
    
    console.log(time);
}

setInterval(printTime,1000,data1);
// setTimeout(printTime(),3*1000);
