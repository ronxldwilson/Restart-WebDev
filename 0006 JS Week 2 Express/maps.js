const arr = [1, 2, 3, 4, 5];

function transform(i){
    return i*2;
}

console.log(arr);
const ans = arr.map(transform);
console.log(ans);

const ans1 = arr.map(function(i){
    return i*2;
});
console.log(ans1);

const ans2 = arr.map((i)=>{
    return i*2;
});
console.log(ans2);