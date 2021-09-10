const prompt = require('prompt-sync')();
const number = prompt('Enter power Number of a 2: ');
if(number>8){
    console.log("Enter number less than 8")
    return;
}
let result =1;
let i=0;
while(i<number){
    result=2*result;
    i++;
    
}
console.log("Result is :"+result);