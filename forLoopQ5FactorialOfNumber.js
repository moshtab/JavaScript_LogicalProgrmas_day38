const prompt = require('prompt-sync')();
const number = prompt('Enter a Number : ');
factorialNumber(number);
function factorialNumber(number){
    let factorial = 1;
    for(let i =1;i<=number;i++){
        factorial=factorial*i;
    }
    console.log("Factorial is :"+factorial)
}