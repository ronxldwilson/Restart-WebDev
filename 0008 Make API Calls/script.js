
// Using Promises
function give10Names(){
    fetch('https://fakerapi.it/api/v1/persons')
        .then(function (response){
            response.json()
                .then(function(finalData){
                    console.log(finalData);
                })
    })
    
}

// Using Async Awaits
async function give10NamesV2(){
    const data = await fetch('https://fakerapi.it/api/v1/persons');
    const response = await data.json();
    console.log(response);
}