//This is a check of how the setTimeouts work out

console.log("Hello");

setTimeout(function(){
    console.log("Hello1");
},2000);

setTimeout(function(){
    console.log("Hello2");
    for(let i = 0;i<10000000000;i++){
        
    }
},1000);
