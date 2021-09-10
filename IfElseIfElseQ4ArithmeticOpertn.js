const prompt = require('prompt-sync')();
const a = prompt('Enter value of a : ');
console.log(`${a}`);
const b = prompt('Enter value of b : ');
console.log(`${b}`);
const c = prompt('Enter value of c : ');
console.log(`${c}`);
let min,max;

let result1 = a + (b * c);
let result2 = (a % b) + c;
let result3 = c + (a /b);
let result4 = (a * b) + c;
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

if(result1 < result2){
    min = result1;
}else if(result2<result3){
    min = result2;
}else if(result3<result4){
    min = result3;
}else{
    min = result4;
}

console.log("Minimum value is : " + min);
if(result1 > result2){
    max = result1;
}else if(result2>result3){
    max = result2;
}else if(result3>result4){
    max = result3;
}else{
    max = result4;
}
console.log(`Maximum value is : ` + max);
