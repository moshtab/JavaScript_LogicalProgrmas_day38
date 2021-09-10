const prompt = require('prompt-sync')();
const number = prompt('Enter a Number : ');
primeFactors(number);
function primeFactors(number){
    for(let i=2;i<number;i++){
        while(number%i==0){
            console.log(i+" ");
            number=number/i;

        }
    }
    if(number>=2){
        console.log(number);
    }else{
        console.log("No prime factors exixts");
    }
}