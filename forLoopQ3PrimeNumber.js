const prompt = require('prompt-sync')();
const number = prompt('Enter a Number : ');
primeNumber(number);
function primeNumber(number){
for(let i=2;i<number;i++){
    if(number%i==0){
        console.log("Number is not Prime");
        return;
    }
}
if(number>=2){
    console.log("Number is Prime")
}
else{
    console.log("Number is Not Prime")
}
}