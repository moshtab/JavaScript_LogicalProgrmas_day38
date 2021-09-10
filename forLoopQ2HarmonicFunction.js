const prompt = require('prompt-sync')();
const number = prompt('Enter a number for Harmonic Fuction: ');
let result =0;
for(let i=1;i<=number;i++){
    result= result+1/i;
}
console.log(result);