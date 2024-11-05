
// Doing without interfaces
// 2 function that takes an object as input and the do operations based on that

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function isLegal1(user: User) {
    if(user.age>18)
        return true;
    else 
        return false;
}

function greet(user: User) {
    console.log(`Hello, ${user.firstName} ${user.lastName}`);
}


isLegal1({
    firstName: "Ron",
    lastName: "W",
    age: 80
});  
greet({
    firstName: "Ron",
    lastName: "W",
    age: 80
});    // Hello, Ron W
