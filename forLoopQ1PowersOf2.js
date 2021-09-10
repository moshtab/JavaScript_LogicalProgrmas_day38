const prompt = require('prompt-sync')();
const number = prompt('Enter power Number of a 2: ');
let result =1;
for(let i=0;i<number;i++ ){
    result=2*result;
    
}
console.log("Result is :"+result);