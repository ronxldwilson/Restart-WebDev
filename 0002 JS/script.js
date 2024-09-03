// JS is dynamically typed, interpreted, single threaded language

// WAP to greet someone

let firstName = "Ron";
let lastName = "Wilson";
let isMarried = false;

console.log("My Name is "+ firstName +" "+ lastName);

if(isMarried === true){
    console.log(firstName+" "+ lastName+ " is Married");
}
else{
    console.log(firstName+" "+ lastName+ " is not Married");
}

let total = 0;
for (let i = 0;i<=1000; i++){
    total=total+i;
}
console.log(total);


let arr = [1,2,3,4,5,6,7,8,9,10];
let count = 0;
let biggest = arr[0];

for (i = 0;i<arr.length;i++){
    if(arr[i]%2===0)
        count++;
}

for (i =0;i<arr.length;i++){
    if(arr[i]>biggest)
        biggest = arr[i];
}

console.log("The count is "+count);
console.log("The Biggest num is "+biggest);

const allUsers = [
    {
        ftName:"Ron",
        lName:"Wilson",
        metadata: {
            age:21,
            gender:"Male",
            address:"new"
        }
    },{
        ftName:"Dan",
        lName:"saver",
        metadata: {
            age:21,
            address:"new",
            gender:"FeMale"
        }},
        {
            ftName:"Ran",
            lName:"paver",
            metadata: {
                age:21,
                address:"new",
                gender:"Male"
            }
}]


for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["metadata"]["gender"] ==="Male"){
        console.log(allUsers[i].ftName +" "+ allUsers[i].lName);
    }
}

for(let i = 0; i<allUsers.length;i++){
    if(allUsers[i].metadata.gender ==="Male")
        console.log(allUsers[i].ftName +" "+ allUsers[i].lName);
}

arr = [1,2,3,4,5];

console.log(arr);
for(let i =0;i<arr.length/2;i++){
    temp = arr[i];
    arr[i]=arr[arr.length-i];
    arr[arr.length-i]=temp;
}

console.log(arr);

function sum(a,b){
    return a+b;
}

console.log(sum(1,2));

// callbacks


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
















