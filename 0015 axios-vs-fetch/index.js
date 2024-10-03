// difference between axios and fetch api

// Using only .then Syntax
// function main(){
//     fetch('https://fakerapi.it/api/v1/persons')
//         .then((res)=>{
//             res.json()
//                 .then((data)=>{
//                     console.log(data)
//                 })
//         })
// }

// Using async inside the fetch syntax
// function main(){
//     fetch('https://fakerapi.it/api/v1/persons')
//         .then(async (response)=>{
//             const data = await response.json();
//             console.log(data)
//         })
// }

// Using only async await throughout 
// async function main() {
//     const response = await fetch('https://fakerapi.it/api/v1/persons')
//     const data = await response.json();
//     console.log(data)
// }


// Changing the method of how it is retreived  
// async function main() {
//     const response = await fetch('https://fakerapi.it/api/v1/persons',{
//         // method: "POST"   //sending headers 
//     })
//     const data = await response.json();
//     console.log(data)
// }


// Using Axios 
// const axios = require('axios');

// async function main() {
//     const response = await axios.get('https://fakerapi.it/api/v1/persons')
//     console.log(response.data)
//     console.log(response.data.data[0])
// }

// Using axios for post request and send the body and headers along with it 
// used http dump website to send the headers throug
const axios = require('axios');

async function main() {
    const response = await axios.post(
        'https://httpdump.app/dumps/57457a2e-622f-4ecf-af1f-6e21fee91b08',{
            username: "Ron",
            body: "123123"
        },
        {
            hearders:{
                authorization: "Bearer 123123"
            }
        }
    )
    console.log(response.data)
}


main()