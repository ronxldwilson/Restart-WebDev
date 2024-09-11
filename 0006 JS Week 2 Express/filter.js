// return an array that only has even numbers from the input array provided here

const arr = [1,2,3,4,5];

function filteringLogic(n){
    if(n%2 === 0)
        return true;
    else 
        false;
}

const ans = arr.filter(filteringLogic);
console.log(ans);
// most of the time this is done via anon function and not thru explicit definition

const ans1 = arr.filter( (n)=>{
    if(n%2 === 0)
        return true;
    else 
        false;
});
console.log(ans1);
